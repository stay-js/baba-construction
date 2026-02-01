'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { toast } from 'sonner';
import ReCAPTCHA from 'react-google-recaptcha';

import sendEmail from '~/app/contact/actions';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import { FormInput, FormTextarea } from '~/components/form';
import { env } from '~/env.js';

const formSchema = z.object({
  firstName: z.string().min(1, { error: 'First name is required!' }),
  lastName: z.string().min(1, { error: 'Last name is required!' }),
  email: z.email({ error: 'Invalid email address!' }),
  phone: z.string().optional(),
  message: z.string().min(1, { error: 'Message is required!' }),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
} satisfies FormSchema;

export function ContactForm() {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema), defaultValues });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    const token = await captchaRef.current?.executeAsync().catch(() => null);
    captchaRef.current?.reset();

    if (!token) return;

    toast.promise(sendEmail({ ...data, token }), {
      loading: 'Sending message...',
      success: () => 'Message sent successfully! We will get back to you as soon as possible.',
      error: () => 'Something went wrong. Please try again later.',
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Get In Touch</CardTitle>
      </CardHeader>

      <CardContent className="h-full">
        <form
          className="flex h-full flex-col justify-between gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput
                required
                name="firstName"
                control={control}
                label="First Name:"
                placeholder="John"
              />

              <FormInput
                required
                name="lastName"
                control={control}
                label="Last Name:"
                placeholder="Doe"
              />
            </div>

            <FormInput
              required
              name="email"
              control={control}
              label="Email:"
              placeholder="john.doe@example.com"
            />

            <FormInput
              name="phone"
              control={control}
              label="Phone:"
              placeholder="+1 (914) 240-3509"
            />

            <FormTextarea
              required
              className="min-h-40 resize-none"
              name="message"
              control={control}
              label="Message:"
              placeholder="Please try to be as detailed as possible..."
            />

            <div className="flex flex-col gap-4 text-sm">
              <div>
                This site is protected by reCAPTCHA and the Google{' '}
                <Link
                  className="text-[#1a73e8] hover:underline"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  className="text-[#1a73e8] hover:underline"
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>{' '}
                apply.
              </div>

              <ReCAPTCHA
                ref={captchaRef}
                sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
              />
            </div>
          </div>

          <Button type="submit" className="w-fit px-8">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
