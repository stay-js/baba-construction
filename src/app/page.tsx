import { Hero } from '~/components/hero';
import { About } from '~/components/about';
import { Services } from '~/components/services';
import { Contact } from '~/components/contact';
import { Projects } from '~/components/projects';
import { Testimonials } from '~/components/testimonials';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/',
  title: 'Home',
  description:
    'BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise. Seamless execution. Timeless results.',
});

export default async function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />

      <Contact />
    </>
  );
}
