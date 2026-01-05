export function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="relative">
        
        {/* Orange glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[#fe7b4b]/20 blur-xl" />

        {/* Glass container */}
        <div className="relative inline-flex items-center gap-5 rounded-full
          bg-white/60 backdrop-blur-md
          border border-black/10
          px-5 py-2
          shadow-sm">

          <a className="text-black text-[16px] hover:text-[#fe7b4b] transition">
            Services
          </a>

          <a className="text-black text-[16px] hover:text-[#fe7b4b] transition">
            Testimonials
          </a>

          <a className="text-black text-[16px]
            border border-[#fe7b4b]
            text-[#fe7b4b]
            rounded-full
            px-4 py-1
            hover:bg-[#fe7b4b]
            hover:text-white
            transition">
            Contact
          </a>

        </div>
      </nav>
    </header>
  )
}
