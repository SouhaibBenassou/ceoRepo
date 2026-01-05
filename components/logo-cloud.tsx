export function LogoCloud() {
  const logos = ["TechCorp", "Innovate", "MediaPlus", "CreativeHub", "BrandStudio", "VisualArts"]

  return (
    <section className="py-12 border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 500+ brands and creators worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
