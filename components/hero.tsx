"use client" 
import { ArrowRight, Play } from "lucide-react"
import LightRays from "./hero-background"
import BlurText from "./ui/blur-text"
import SplitText from "./ui/text-animation-hero"

export function Hero() {
  const handleAnimationComplete = () =>{ 

  }
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Silk background */}
     
      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-64 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-[#fe7b4b]/25 blur-[200px]" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 text-center">

          {/* Badge */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 text-sm font-medium text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#fe7b4b] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fe7b4b]" />
              </span>
              Now accepting new clients
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance">
            <span className="flex items-center justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
               
                <BlurText
                  text="Elevate Your"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-8xl mb-8"
                />
            </span>
            <div className="flex justify-center gap-3"> 
              <BlurText
                  text="Visual"
                  delay={200}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-8xl mb-8 text-white"
                /> 
                <BlurText
                  text="Story"
                  delay={1}
                  animateBy="words"
                  direction="bottom"
                  onAnimationComplete={handleAnimationComplete}
                  className="text-8xl mb-8 text-[#fe7b4b]"
                />
            </div>
          </h1>

          {/* Description */} 

                    <SplitText
                        delay={20}
                        duration={0.2}
                        text="Transform raw footage into cinematic masterpieces. Professional video editing
            that captivates audiences and brings your vision to life."

                        className="font-semibold text-center mt-8 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              />
          {/* <p className="">
            
          </p> */}

          {/* CTA */}
          <div className="mt-16 flex justify-center gap-4 flex-wrap">
            <button className="group relative inline-flex items-center gap-2 rounded-full bg-[#fe7b4b] px-8 py-4 text-black text-lg font-medium shadow-[0_20px_60px_rgba(254,123,75,0.45)] transition-all duration-300 hover:scale-105">
              Let`s Work Together
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 -z-10 rounded-full blur-xl bg-[#fe7b4b]/50 opacity-0 group-hover:opacity-100 transition" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
              <Play className="h-5 w-5" />
              Watch Reel
            </button>
          </div>
        </div>
      </div>



    </section>
  )
}
