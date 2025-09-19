import type { NextPage } from 'next';
import { Header } from '~/components/header';
import { Hero } from '~/components/hero';

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
