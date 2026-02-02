'use server';

import { headers } from 'next/headers';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { z } from 'zod';
import nodemailer from 'nodemailer';

import { validateCaptchaResponse } from '~/lib/validate-captcha-response';
import { env } from '~/env.js';

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  token: z.string().min(1),
});

type Data = z.infer<typeof schema>;

export default async function sendEmail(formData: Data) {
  const { data, success } = schema.safeParse(formData);
  if (!success) throw new Error('Invalid form data');

  const isHuman = await validateCaptchaResponse(data.token);
  if (!isHuman) throw new Error('Captcha validation failed');

  const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(3, '1 m'),
    analytics: true,
    prefix: '@upstash/ratelimit',
  });

  const heads = await headers();
  const ip = heads.get('x-forwarded-for');
  if (!ip) throw new Error('No client IP');

  const result = await ratelimit.limit(ip);
  if (!result.success) throw new Error('Too many requests');

  try {
    const transporter = nodemailer.createTransport({
      host: env.NODEMAILER_HOST,
      port: Number(env.NODEMAILER_PORT),
      secure: true,
      auth: {
        user: env.NODEMAILER_USER,
        pass: env.NODEMAILER_PASS,
      },
    });

    await transporter.sendMail({
      from: 'Message notification - noreply<noreply@znagy.hu>',
      to: env.NODEMAILER_TO_EMAIL,
      bcc: env.NODEMAILER_DEV_EMAIL,
      replyTo: data.email,
      subject: `New message from ${data.firstName} ${data.lastName} (${data.email})`,
      html: `
				<div>
        First Name: <b>${data.firstName}</b>&emsp;Last Name: <b>${data.lastName}</b>
				<br />
				Email: <b>${data.email}</b>
        <br />
				Phone Number: <b>${data.phone}</b>
				</div>
				<br />
		
				<div>
				Message:
				<br />
				${data.message.replace(/\n/g, '<br />')}
				</div>
				`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
