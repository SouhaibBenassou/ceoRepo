import { Film, Sparkles, Wand2, Music, Monitor, Clock } from "lucide-react"

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional cuts, transitions, and pacing that bring your story to life with cinematic quality.",
  },
  {
    icon: Sparkles,
    title: "Color Grading",
    description: "Transform the mood and atmosphere of your footage with expert color correction and grading.",
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Dynamic titles, lower thirds, and animated elements that enhance visual storytelling.",
  },
  {
    icon: Music,
    title: "Sound Design",
    description: "Crystal-clear audio mixing, sound effects, and music integration for immersive experiences.",
  },
  {
    icon: Monitor,
    title: "Format Optimization",
    description: "Deliver content optimized for any platform—YouTube, Instagram, TikTok, or broadcast.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Meet your deadlines with our efficient workflow and dedicated project management.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Everything you need for stunning videos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From raw footage to polished final cut, we handle every aspect of post-production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary mb-6">
                <service.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
