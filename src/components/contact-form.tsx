'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';
import { Label } from '~/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import { env } from '~/env.js';
import sendEmail from '~/app/contact/actions';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required!'),
  lastName: z.string().min(1, 'Last name is required!'),
  email: z.email('Invalid email address!'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required!'),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues: FormSchema = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export const ContactForm: React.FC = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema), defaultValues });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    const token = await captchaRef.current?.executeAsync().catch(() => null);
    captchaRef.current?.reset();

    if (!token) return;

    const result = await sendEmail({ ...data, token });

    console.log(result?.success);
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="first-name" className="text-base">
                    First Name: <span className="text-red-500">*</span>
                  </Label>

                  {errors.firstName && (
                    <span className="text-xs text-red-500 dark:text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>
                <Input id="first-name" type="text" {...register('firstName')} />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="last-name" className="text-base">
                    Last Name: <span className="text-red-500">*</span>
                  </Label>

                  {errors.lastName && (
                    <span className="text-xs text-red-500 dark:text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>

                <Input id="last-name" type="text" {...register('lastName')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="email" className="text-base">
                  Email: <span className="text-red-500">*</span>
                </Label>

                {errors.email && (
                  <span className="text-xs text-red-500 dark:text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <Input id="email" type="text" {...register('email')} />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="phone" className="text-base">
                  Phone Number:
                </Label>

                {errors.phone && (
                  <span className="text-xs text-red-500 dark:text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <Input id="phone" type="text" {...register('phone')} />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="message" className="text-base">
                  Message: <span className="text-red-500">*</span>
                </Label>

                {errors.message && (
                  <span className="text-xs text-red-500 dark:text-red-500">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <Textarea id="message" className="min-h-40 resize-none" {...register('message')} />
            </div>

            <div className="text-sm">
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
          </div>

          <Button type="submit" className="w-fit px-8">
            Submit
          </Button>

          <ReCAPTCHA
            ref={captchaRef}
            sitekey={env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            size="invisible"
          />
        </form>
      </CardContent>
    </Card>
  );
};
