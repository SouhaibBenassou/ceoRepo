import Image from "next/image";
interface IHeaderInterface {
  openContactForm: () => void;
}
export function Header({ openContactForm }: IHeaderInterface) {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-fit">
      <nav>
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 sm:gap-6 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 p-1.5 sm:px-4 sm:py-2 text-white shadow-lg whitespace-nowrap">
            <div className="relative w-12 h-12 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="logo"
                fill
                className="object-contain"
                sizes="64px"
                priority
              />
            </div>

            <div className="flex items-center gap-3 sm:gap-6 text-[14px] sm:text-[16px]">
              <a
                href="#footer"
                className="hover:text-[#fe7b4b] transition-colors cursor-pointer">
                Services
              </a>
              <a
                href="#work"
                className="hover:text-[#fe7b4b] transition-colors cursor-pointer">
                Works
              </a>
              <a
                href="#testimonials"
                className="hover:text-[#fe7b4b] transition-colors cursor-pointer">
                Testimonials
              </a>
            </div>

            <button
              className="text-[14px] sm:text-[16px] border border-[#fe7b4b] rounded-full px-4 py-1 sm:px-6 sm:py-2 hover:bg-[#fe7b4b] transition-all"
              onClick={openContactForm}>
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
