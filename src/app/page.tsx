import { About } from '~/components/about';
import { Contact } from '~/components/contact';
import { Hero } from '~/components/hero';
import { Projects } from '~/components/projects';
import { Services } from '~/components/services';
import { Testimonials } from '~/components/testimonials';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  description:
    'BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise. Seamless execution. Timeless results.',
  path: '/',
  title: 'Home',
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
