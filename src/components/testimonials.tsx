import { Card } from '~/components/ui/card';
import { testimonials } from '~/constants/testimonials';

export function Testimonials() {
  return (
    <section className="bg-card scroll-m-8 py-20" id="testimonials">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold text-balance">What Our Clients Say</h2>
          <h3 className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </h3>
        </div>

        <div className="gap-4 md:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <div className="break-inside-avoid-column pb-4" key={item.author}>
              <Card className="bg-background flex flex-col gap-8 p-8">
                <blockquote className="text-foreground/80 leading-relaxed text-pretty">
                  &quot;{item.testimonial}&quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="bg-input/60 grid size-12 place-items-center rounded-full">
                    <span className="text-sm font-bold">
                      {item.initials ??
                        item.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                    </span>
                  </div>

                  <div>
                    <div className="text-foreground/80 font-semibold">{item.author}</div>
                    <div className="text-muted-foreground text-sm">{item.role}</div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
