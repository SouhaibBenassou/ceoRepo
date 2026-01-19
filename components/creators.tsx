// app/components/CreatorsSection.tsx
import Image from "next/image";

const stats = [
  { value: "+150", label: "Projects Completed" },
  { value: "+70", label: "Satisfied Clients" },
  { value: "+19M", label: "Views" },
];

const creators = [
  {
    name: "Learn With Shopify",
    subtitle: "728K subscribers",
    image: "https://framerusercontent.com/images/C5z57QAFRTpFEQ5yarJrnRF0w.jpg?width=400&height=400",
  },
  {
    name: "Daniel Contreras",
    subtitle: "+400K followers",
    image: "https://framerusercontent.com/images/fYRpsfBs5JQmx0HN7TseAzYXiic.jpg?width=160&height=160",
  },
  {
    name: "Joseph",
    subtitle: "100K subscribers",
    image: "https://framerusercontent.com/images/MAifPhXrzEoKNFLLJzpsLizd0.jpg?width=160&height=160",
  },
  {
    name: "Steven Cravotta",
    subtitle: "31.5K subscribers",
    image: "https://framerusercontent.com/images/cRMr8G2HwSHXJoRm4X5SbM6T8U.webp?width=470&height=660 470w",
  },
  {
    name: "Ruri Ohama",
    subtitle: "1.50M subscribers",
    image: "https://framerusercontent.com/images/C5z57QAFRTpFEQ5yarJrnRF0w.jpg?width=400&height=400",
  },
  {
    name: "Calum White",
    subtitle: "25K followers",
    image: "https://framerusercontent.com/images/C5z57QAFRTpFEQ5yarJrnRF0w.jpg?width=400&height=400",
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
            <span className="text-gray-300 font-normal">
              I've worked with
            </span>
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
              <p className="mt-1 text-sm text-white-500">
                {stat.label}
              </p>
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
              <p className="text-xs text-[#a0a3a9]">
                {creator.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
