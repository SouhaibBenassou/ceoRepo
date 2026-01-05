import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white">
      
      {/* BIG soft glow */}
      <div className="pointer-events-none absolute -top-56 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-orange-200/40 blur-[180px]" />

      {/* Secondary blur layer */}
      <div className="pointer-events-none absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-300/20 blur-[140px]" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 backdrop-blur-md border border-black/10 px-4 py-1.5 text-sm font-medium text-black">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe7b4b] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fe7b4b]" />
                </span>
                Now accepting new clients
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl text-black text-balance">
              Elevate Your
              <span className="block text-[#fe7b4b]">Visual Story</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-black/70 max-w-2xl mx-auto text-pretty">
              Transform raw footage into cinematic masterpieces. Professional video editing that captivates audiences
              and brings your vision to life.
            </p>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-[#fe7b4b]">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-6 rounded-full border-2 border-[#fe7b4b] flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-[#fe7b4b] animate-pulse" />
          </div>
        </div>
      </div>

    </section>
  )
}
