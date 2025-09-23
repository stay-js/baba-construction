'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';
import { validateCaptchaResponse } from '~/lib/validate-captcha-response';
import { env } from '~/env.js';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  phone: z.string().optional(),
  message: z.string(),
  token: z.string(),
});

type Data = z.infer<typeof schema>;

export default async function sendEmail(formData: Data) {
  const { data, success } = schema.safeParse(formData);

  if (!success) return { success: false };

  const isHuman = await validateCaptchaResponse(data.token);
  if (!isHuman) return { success: false };

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
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
