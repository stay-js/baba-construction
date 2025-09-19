import type { NextPage } from 'next';
import { Header } from '~/components/header';
import { Hero } from '~/components/hero';
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
      <div className="min-h-[200vh]"></div>
    </main>
  </div>
);

export default Page;
