"use client";

import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef, useState } from "react";

export function SliderTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    { id: 1, src: "/videos/test1.mp4", title: "Nature Documentary" },
    { id: 2, src: "/videos/test2.mp4", title: "City Life" },
    { id: 3, src: "/videos/test3.mp4", title: "Photography" },
  ];

  const resetAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
      video.muted = true;
    });
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const cardWidth = carouselRef.current.children[0]?.clientWidth || 0;
    const gap = 24;

    carouselRef.current.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;

    resetAllVideos();
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;

    resetAllVideos();
    scrollToIndex(newIndex);
  };

  const handleVideoClick = (index: number) => {
    resetAllVideos();
    scrollToIndex(index);

    const selectedVideo = videoRefs.current[index];
    if (!selectedVideo) return;

    selectedVideo.muted = false;
    selectedVideo.play();
  };

  return (
    <section id="work" className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-lg hover:bg-orange-dark transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange rounded-full flex items-center justify-center shadow-lg hover:bg-orange-dark transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slides */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-16 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`shrink-0 w-72 md:w-80 snap-center transition-all duration-300 ${
                  index === currentIndex
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60"
                }`}
              >
                <div
                  onClick={() => handleVideoClick(index)}
                  className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-gray-900 cursor-pointer group"
                >
                  {/* Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Play label */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 pointer-events-none">
                    <Play className="w-4 h-4 text-white fill-white" />
                    <span className="text-sm text-white">Play</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
