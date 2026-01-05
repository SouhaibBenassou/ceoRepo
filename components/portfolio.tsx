const projects = [
  {
    title: "Brand Campaign",
    category: "Commercial",
    image: "/cinematic-brand-video-dark-moody-commercial.jpg",
  },
  {
    title: "Documentary",
    category: "Film",
    image: "/documentary-film-production-behind-scenes.jpg",
  },
  {
    title: "Music Video",
    category: "Entertainment",
    image: "/music-video-production-colorful-artistic.jpg",
  },
  {
    title: "Product Launch",
    category: "Marketing",
    image: "/product-video-sleek-modern-tech.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected work</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              A showcase of our recent projects across various industries and styles.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl bg-secondary cursor-pointer"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-primary-foreground mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
