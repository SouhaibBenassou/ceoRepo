import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav>
        <div className="flex items-center gap-1 ">
          {/* Menu */}
          <div className="inline-flex items-center gap-5 rounded-full  bg-white/10 backdrop-blur-lg border border-white/20 px-3 py-2 text-sm font-medium text-white shadow-lg">
           <div className="ml-2 relative w-8 h-8 text-sm font-medium  overflow-hidden shrink-0 flex items-center justify-center shadow-sm">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              className="object-contain scale-200"
              sizes="56px"
              priority
            />
          </div>
            <a className="text-white text-[16px] hover:text-[#fe7b4b] transition">
              Services
            </a>

            <a className="text-white text-[16px] hover:text-[#fe7b4b] transition">
              Testimonials
            </a>

            <a className="text-white text-[16px] border border-[#fe7b4b] rounded-full px-4 py-1 hover:bg-[#fe7b4b] hover:text-white transition">
              Contact
            </a>
          </div>

        </div>
      </nav>
    </header>
  )
}
