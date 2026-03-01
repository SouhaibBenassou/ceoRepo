"use client";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import CreatorsSection from "@/components/creators";
import { BackGroundLight } from "@/components/background-light";
import ContactForm from "@/components/contact";
import { useState } from "react";
import { VideoPlayer } from "@/components/video-player";
import { SliderTestimonials } from "@/components/slider-testimonials";

export default function Home() {
  const [openContactForm, setOpenContactForm] = useState(false);
  return (
    <main className="min-h-screen bg-black">
      <BackGroundLight />
      <Header openContactForm={() => setOpenContactForm(true)} />
      <Hero />
      <CreatorsSection />
      {openContactForm && (
        <ContactForm
          closed={openContactForm}
          onClose={() => setOpenContactForm(false)}
        />
      )}
      <VideoPlayer />
      <SliderTestimonials />
    </main>
  );
}
