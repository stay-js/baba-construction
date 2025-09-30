import type { NextPage } from 'next';
import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { createMetadata } from '~/lib/create-metadata';
import { Services } from '~/components/services';
import { Contact } from '~/components/contact';
import { Projects } from '~/components/projects';
import { Testimonials } from '~/components/testimonials';

export const metadata = createMetadata({
  path: '/',
  title: 'Home',
  description:
    'BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise. Seamless execution. Timeless results.',
});

const Page: NextPage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Projects />
    <Testimonials />

    <Contact />
  </>
);

export default Page;
