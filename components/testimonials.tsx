import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "FrameCut transformed our raw footage into a stunning brand video that exceeded all expectations. Their attention to detail is unmatched.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechCorp",
  },
  {
    quote:
      "Working with this team was a game-changer for our YouTube channel. Our engagement rates doubled after implementing their editing style.",
    author: "Marcus Johnson",
    role: "Content Creator",
    company: "500K Subscribers",
  },
  {
    quote:
      "Fast, professional, and incredibly creative. They understood our vision immediately and delivered beyond what we imagined.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "CreativeHub",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What our clients say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don&apos;t just take our word for it—hear from the brands and creators we&apos;ve worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 rounded-xl border border-border bg-card">
              <Quote className="h-8 w-8 text-accent/30 mb-4" />
              <blockquote className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-semibold text-muted-foreground">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
