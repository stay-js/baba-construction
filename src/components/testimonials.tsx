import { Card } from '~/components/ui/card';
import { testimonials } from '~/constants/testimonials';

export function Testimonials() {
  return (
    <section className="bg-card scroll-m-8 py-20" id="testimonials">
      <div className="container mx-auto flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold text-balance">What Our Clients Say</h2>
          <h3 className="mx-auto max-w-2xl text-xl text-balance text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about
            working with us.
          </h3>
        </div>

        <div className="gap-6 md:columns-2 lg:columns-3">
          {testimonials.map((item) => (
            <div key={item.author} className="break-inside-avoid-column pb-6">
              <Card className="flex flex-col gap-8 bg-background p-8">
                <blockquote className="leading-relaxed text-pretty text-foreground/80">
                  &quot;{item.testimonial}&quot;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="grid size-12 place-items-center rounded-full bg-input/60">
                    <span className="text-sm font-bold">
                      {item.initials ??
                        item.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                    </span>
                  </div>

                  <div>
                    <div className="font-semibold text-foreground/80">{item.author}</div>
                    <div className="text-sm text-muted-foreground">{item.role}</div>
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
