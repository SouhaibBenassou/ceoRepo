"use client";
import { ArrowRight, Play } from "lucide-react";
import BlurText from "./ui/blur-text";

export function Hero() {
  const handleAnimationComplete = () => {};

  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden">
      {/* Silk background */}

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-40 md:-top-64 left-1/2 h-[250px] md:h-175 w-[250px] md:w-175 -translate-x-1/2 rounded-full bg-[#fe7b4b]/25 blur-[150px] md:blur-[200px]" />

      <div className="relative z-10 flex min-h-screen md:h-full items-center justify-center py-12 md:py-0">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="mb-6 md:mb-10 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#fe7b4b] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#fe7b4b]" />
              </span>
              Now accepting new clients
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance leading-tight">
            <span className="flex items-center justify-center text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <BlurText
                text="Elevate Your"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl sm:text-7xl md:text-8xl"
              />
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-3 mt-4 sm:mt-0">
              <BlurText
                text="Visual"
                delay={200}
                animateBy="words"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl sm:text-7xl md:text-8xl text-white"
              />
              <BlurText
                text="Story"
                delay={1}
                animateBy="words"
                direction="bottom"
                onAnimationComplete={handleAnimationComplete}
                className="text-5xl sm:text-7xl md:text-8xl text-[#fe7b4b]"
              />
            </div>
          </h1>

          <BlurText
            animateBy="words"
            direction="top"
            delay={20}
            text="Transform raw footage into cinematic masterpieces. Professional video editing that captivates audiences"
            className="font-semibold text-center mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4"
          />

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 flex-wrap">
            <a href="https://tally.so/r/q4WAyY">
              <button className="group relative inline-flex items-center gap-2 rounded-full bg-[#fe7b4b] px-6 py-3 sm:px-8 sm:py-4 text-black text-base sm:text-lg font-medium shadow-[0_20px_60px_rgba(254,123,75,0.45)] transition-all duration-300 hover:scale-105">
                Let`s Work Together
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -z-10 rounded-full blur-xl bg-[#fe7b4b]/50 opacity-0 group-hover:opacity-100 transition" />
              </button>
            </a>
            <a href="https://www.instagram.com/by_dekto/">
              <button className="inline-flex items-center gap-2 rounded-full px-5 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition">
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                Watch Reel
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
