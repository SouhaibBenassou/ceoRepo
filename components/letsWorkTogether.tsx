export default function CTASection() {
  return (
    <section className="relative bg-black min-h-[340px] flex flex-col items-center justify-center text-center px-8 py-20 overflow-hidden rounded-xl">

      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-[#D85A30]/10 blur-[80px]" />
      </div>

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 border border-[#D85A30] rounded-full px-4 py-1.5 mb-7">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D85A30] animate-pulse" />
        <span className="text-[#D85A30] text-sm font-medium tracking-wide">
          Let’s work together
        </span>
      </div>

      {/* Headline */}
      <h2 className="relative z-10 text-white font-extrabold text-4xl md:text-5xl leading-tight max-w-2xl mb-4">
        <span className="text-[#D85A30]">Let’s</span> take your brand to the next level
      </h2>

      {/* Subtext */}
      <p className="relative z-10 text-white/40 text-base leading-relaxed max-w-md mb-10">
        We craft identities, experiences, and campaigns that make people stop
        and look twice. Ready to stand out?
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-wrap gap-3 justify-center">
        
        <a
          href="https://tally.so/r/q4WAyY"
          className="bg-[#D85A30] hover:bg-[#e8683f] text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          Start a project
        </a>

        <a
          href="#work"
          className="bg-transparent text-white/70 hover:text-white border border-white/20 hover:border-white/50 text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
        >
          See our work
        </a>

      </div>

      {/* Social Proof */}
      <div className="relative z-10 flex items-center gap-3 mt-9">
        <div className="flex">
          {[
            { initials: "JK", bg: "bg-[#3C3489]" },
            { initials: "ML", bg: "bg-[#0F6E56]" },
            { initials: "AS", bg: "bg-[#993C1D]" },
            { initials: "RC", bg: "bg-[#185FA5]" },
          ].map((av, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full ${av.bg} border-2 border-[#0a0a0a] flex items-center justify-center text-white text-xs font-medium ${
                i !== 0 ? "-ml-2" : ""
              }`}
            >
              {av.initials}
            </div>
          ))}
        </div>

        <p className="text-white/40 text-sm">
          <span className="text-white/70 font-medium">50+ brands</span> already leveled up
        </p>
      </div>

    </section>
  );
}