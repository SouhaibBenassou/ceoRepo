import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import CreatorsSection from "@/components/creators"
import { BackGroundLight } from "@/components/background-light"
import { VideoPlayer } from "@/components/video-player"
import { SliderTestimonails } from "@/components/slider-testimonials"


export default function Home() {
  return (
    <main className="min-h-screen bg-[#020508]"> 
     <BackGroundLight />
      <Header />
      <Hero />
      <CreatorsSection/> 
      <VideoPlayer/>
      <SliderTestimonails/>
    </main>
  )
}
