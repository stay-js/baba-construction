import type { NextPage } from 'next';
import { Header } from '~/components/header';
import { Hero } from '~/components/hero';
import { Footer } from '~/components/footer';
import { About } from '~/components/about';
import { createMetadata } from '~/lib/create-metadata';
import { Services } from '~/components/services';
import { Contact } from '~/components/contact';

export const metadata = createMetadata({
  path: '/',
  title: 'Home',
  description:
    'BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise. Seamless execution. Timeless results.',
});

const Page: NextPage = () => (
  <div className="min-h-screen">
    <Header />

    <main>
      <Hero />
      <About />
      <Services />

      <Contact />

      <Footer />
    </main>
  </div>
);

export default Page;
