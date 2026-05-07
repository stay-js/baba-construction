'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

import sendEmail from '~/app/contact/actions';
import { FormInput, FormTextarea } from '~/components/form';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { env } from '~/env.js';

const formSchema = z.object({
  email: z.email({ error: 'Invalid email address!' }).trim(),
  firstName: z.string().trim().min(1, { error: 'First name is required!' }),
  lastName: z.string().trim().min(1, { error: 'Last name is required!' }),
  message: z.string().trim().min(1, { error: 'Message is required!' }),
  phone: z.string().trim().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phone: '',
} satisfies FormSchema;

export function ContactForm() {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<FormSchema>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const handleFormSubmit = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      async function onSubmit(data: FormSchema) {
        const token = await captchaRef.current?.executeAsync().catch(() => null);
        captchaRef.current?.reset();

        if (!token) return;

        toast.promise(sendEmail({ ...data, token }), {
          error: () => 'Something went wrong. Please try again later.',
          loading: 'Sending message...',
          success: () => {
            reset(defaultValues);
            return 'Message sent successfully! We will get back to you as soon as possible.';
          },
        });
      }

      void handleSubmit(onSubmit)(e);
    },
    [handleSubmit, reset],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Get In Touch</CardTitle>
      </CardHeader>

      <CardContent className="h-full">
        <form className="flex h-full flex-col justify-between gap-8" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormInput
                control={control}
                label="First Name:"
                name="firstName"
                placeholder="John"
                required
              />

              <FormInput
                control={control}
                label="Last Name:"
                name="lastName"
                placeholder="Doe"
                required
              />
            </div>

            <FormInput
              control={control}
              label="Email:"
              name="email"
              placeholder="john.doe@example.com"
              required
            />

            <FormInput
              control={control}
              label="Phone:"
              name="phone"
              placeholder="+1 (914) 240-3509"
            />

            <FormTextarea
              className="min-h-40 resize-none"
              control={control}
              label="Message:"
              name="message"
              placeholder="Please try to be as detailed as possible..."
              required
            />

            <div className="flex flex-col gap-4 text-sm">
              <div>
                This site is protected by reCAPTCHA and the Google{' '}
                <Link
                  className="text-[#1a73e8] hover:underline"
                  href="https://policies.google.com/privacy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  className="text-[#1a73e8] hover:underline"
                  href="https://policies.google.com/terms"
                  rel="noopener noreferrer"
                  target="_blank"
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

          <Button className="w-fit px-8" disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
