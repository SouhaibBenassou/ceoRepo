// app/components/CreatorsSection.tsx
import Image from "next/image";
import CountUp from "./ui/CountUp";

const stats = [
  { value: "+50", label: "Projects Completed" },
  { value: "+20", label: "Satisfied Clients" },
  { value: "+19", label: "Views" },
];

const creators = [
  {
    name: "Mrnd.clothing",
    subtitle: "70.2K followers",
    image: "/assets/mrind.jpg",
  },
  {
    name: "Facts.in.minutees",
    subtitle: "1,09M subscribers",
    image: "/assets/MiniYoutube.jpg",
  },
  {
    name: "Barry_empire",
    subtitle: "32.9K followers",
    image: "/assets/barry_empire.jpg",
  },
  {
    name: "infiniagrowth",
    subtitle: "5K followers",
    image: "/assets/inifinity.jpg",
  },
  {
    name: "ayoubcopywriter",
    subtitle: "50K followers",
    image: "/assets/ayoubcopywriter.jpg",
  },
  {
    name: "lassakri",
    subtitle: "1.1M",
    image: "/assets/lassakri.jpg",
  },
];

export default function CreatorsSection() {
  return (
    <section className="text-gray-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block mb-3 rounded-full border border-[#fe7b4b] px-4 py-1 text-xs font-medium text-[#fe7b4b]">
            Our Clients
          </span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Creators{" "}
            <span className="text-gray-300 font-normal">I've worked with</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 my-8 md:my-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center text-[#c6c9d0] w-full md:w-auto border-b md:border-b-0 md:border-r border-gray-800 last:border-r-0 pb-4 md:pb-0 md:pr-10">
              {i === 2 ? (
                <div className="flex justify-center">
                  <CountUp
                    from={0}
                    to={Number(stat.value)}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text text-3xl md:text-4xl font-bold text-[#fe7b4b]"
                  />
                  <p className="text-3xl md:text-4xl font-bold text-[#fe7b4b]">
                    M
                  </p>
                </div>
              ) : (
                <CountUp
                  from={0}
                  to={Number(stat.value)}
                  separator=","
                  direction="up"
                  duration={0.1}
                  className="count-up-text text-3xl md:text-4xl font-bold text-[#fe7b4b]"
                />
              )}

              <p className="mt-1 text-xs md:text-sm text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Creators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-stretch">
          {creators.map((creator, i) => (
            <div key={i} className="text-center">
              <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                />
              </div>

              <h3 className="mt-3 text-[#c6c9d0] text-xs sm:text-sm font-medium leading-tight">
                {creator.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-[#a0a3a9]">
                {creator.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
