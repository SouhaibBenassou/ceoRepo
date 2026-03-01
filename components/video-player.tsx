"use client";

import { useRef, useState } from "react";
import { Play, Pause, Briefcase } from "lucide-react";

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="flex justify-center items-center mb-9 gap-2">
        <Briefcase className="text-[#ffffff]" />
        <h1 className="text-3xl font-bold text-[#ffffff] ">Our Work</h1>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
        <video
          ref={videoRef}
          src="/videos/intro-final.mp4"
          className="w-full h-full object-cover opacity-80"
        />

        {/* Play / Pause Button */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-white" />
              <span className="text-sm">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span className="text-sm">Play</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
