import Link from 'next/link';

import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/privacy-policy',
  title: 'Privacy Policy',
  description:
    'This Privacy Policy explains how we collect, use, and protect personal information when you interact with our website babaconstructioncorp.com.',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto flex max-w-6xl scroll-m-8 flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-balance">Privacy Policy</h1>

      <div className="flex flex-col gap-10">
        <div className="leading-relaxed text-muted-foreground">
          <p>
            <b>Effective Date:</b> September 30, 2025
          </p>
          <p>
            <b>Last Updated:</b> September 30, 2025
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="leading-relaxed text-foreground/90">
            This Privacy Policy explains how we collect, use, and protect personal information when
            you interact with our website{' '}
            <Link href="https://babaconstructioncorp.com" className="font-bold underline">
              babaconstructioncorp.com
            </Link>
            .
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="leading-relaxed text-foreground/90">
            The only personal information we collect is what you provide voluntarily through our{' '}
            <Link href="/#contact" className="font-bold underline">
              Contact Form
            </Link>
            , such as:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li className="leading-relaxed text-foreground/90">Name</li>
            <li className="leading-relaxed text-foreground/90">Email address</li>
            <li className="leading-relaxed text-foreground/90">Phone number (optional)</li>
            <li className="leading-relaxed text-foreground/90">Message or Inquiry details</li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
          <p className="leading-relaxed text-foreground/90">
            We use the information submitted through the{' '}
            <Link href="/#contact" className="font-bold underline">
              Contact Form
            </Link>{' '}
            solely to:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li className="leading-relaxed text-foreground/90">Respond to your inquiries</li>
            <li className="leading-relaxed text-foreground/90">Communicate regarding our services</li>
          </ul>
          <p>
            <b>We do not sell, rent, or share</b> your personal information with third parties for
            marketing purposes.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">4. Data Security</h2>
          <p className="leading-relaxed text-foreground/90">
            We take steps to protect your information:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li className="leading-relaxed text-foreground/90">
              Our contact form is protected by Google reCAPTCHA to prevent spam and abuse.
            </li>
            <li className="leading-relaxed text-foreground/90">
              We use an IP-based rate limiter with{' '}
              <Link
                className="font-bold underline"
                href="https://redis.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redis
              </Link>{' '}
              (running on{' '}
              <Link
                className="font-bold underline"
                href="https://upstash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upstash
              </Link>
              , us-east-1) to safeguard against excessive requests.
            </li>
            <li className="leading-relaxed text-foreground/90">
              Messages are transmitted securely through our backend (hosted on{' '}
              <Link
                className="font-bold underline"
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </Link>
              , us-east-1) and sent via{' '}
              <Link
                className="font-bold underline"
                href="https://aws.amazon.com/ses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon Simple Email Service (SES)
              </Link>
              .
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">5. Third-Party Services</h2>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li className="leading-relaxed text-foreground/90">
              Google reCAPTCHA: Protects our forms from abuse. Your use of reCAPTCHA is subject to
              the Google{' '}
              <Link
                className="font-bold underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                className="font-bold underline"
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </Link>
              .
            </li>
            <li className="leading-relaxed text-foreground/90">
              <Link
                className="font-bold underline"
                href="https://aws.amazon.com/ses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amazon SES
              </Link>
              : Used to send form submissions via email.
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <p className="leading-relaxed text-foreground/90">
            If you have submitted personal information, you may request access, correction, or
            deletion by contacting us at:
          </p>
          <ul className="flex list-inside list-disc flex-col gap-1">
            <li className="leading-relaxed text-foreground/90">
              <strong>Email:</strong> babaconstructioncorp@gmail.com
            </li>
            <li className="leading-relaxed text-foreground/90">
              <strong>Phone:</strong> +1 (914) 240-3509
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
          <p className="leading-relaxed text-foreground/90">
            We may update this Privacy Policy from time to time. The “Last Updated” date at the top
            will reflect the most recent version.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">8. Contact Us</h2>
          <p className="leading-relaxed text-foreground/90">
            For any questions about this Privacy Policy, please contact:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 pl-0">
            <li className="leading-relaxed text-foreground/90">
              <strong>Email:</strong> babaconstructioncorp@gmail.com
            </li>
            <li className="leading-relaxed text-foreground/90">
              <strong>Phone:</strong> +1 (914) 240-3509
            </li>
            <li className="leading-relaxed text-foreground/90">
              <strong>Address:</strong> 9 Alta Vista Circle, Irvington, NY, 10533
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
