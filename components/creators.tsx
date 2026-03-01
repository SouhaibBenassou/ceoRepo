// app/components/CreatorsSection.tsx
import Image from "next/image";

const stats = [
  { value: "+50", label: "Projects Completed" },
  { value: "+20", label: "Satisfied Clients" },
  { value: "+19M", label: "Views" },
];

const creators = [
  {
    name: "Mrnd.clothing",
    subtitle: "70.2K followers",
    image: "./assets/mrind.jpg",
  },
  {
    name: "Facts.in.minutees",
    subtitle: "1,09M subscribers",
    image: "./assets/Mini-Youtube.png",
  },
  {
    name: "Barry_empire",
    subtitle: "32.9K followers",
    image: "./assets/barry_empire.jpg",
  },
  {
    name: "Donyalami",
    subtitle: "204K followers",
    image: "./assets/donyalami.jpg",
  },
  {
    name: "sheeeeeeeeeeeva",
    subtitle: "200K followers",
    image: "./assets/sheeeeeeeeeeeva.jpg",
  },
  {
    name: "iamlilpatty",
    subtitle: "392K followers",
    image: "./assets/iamlilpatty.jpg",
  },
];

export default function CreatorsSection() {
  return (
    <section className=" text-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block mb-3 rounded-full border border-[#fe7b4b] px-4 py-1 text-xs font-medium text-[#fe7b4b]">
            Our Clients
          </span>
          <h2 className="text-white text-4xl md:text-5xl font-semibold tracking-tight">
            Creators{" "}
            <span className="text-gray-300 font-normal">I've worked with</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-10 my-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center text-[#c6c9d0] border-b md:border-b-0 md:border-r border-gray-200 last:border-r-0 pb-6 md:pb-0 pr-10"
            >
              <div className="text-4xl font-bold text-[#fe7b4b]">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-white-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Creators */}
        <div className="flex items-center justify-center gap-3">
          {creators.map((creator, i) => (
            <div key={i} className="text-center">
              <div className="relative mx-auto h-38 w-38 overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-3 text-[#c6c9d0] text-sm font-medium leading-tight">
                {creator.name}
              </h3>
              <p className="text-xs text-[#a0a3a9]">{creator.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
