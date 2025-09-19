import type { NextPage } from 'next';
import { Header } from '~/components/header';
import { Hero } from '~/components/hero';
import { Footer } from '~/components/footer';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '',
  title: 'Home',
  description:
    'BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise. Seamless execution. Timeless results.',
});

const Page: NextPage = () => (
  <div className="min-h-screen">
    <Header />

    <main>
      <Hero />

      <div
        //plceholder for page content
        className="min-h-[200vh]"
      />

      <Footer />
    </main>
  </div>
);

export default Page;
