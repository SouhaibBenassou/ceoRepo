import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import CreatorsSection from "@/components/creators"
import { BackGroundLight } from "@/components/background-light"

export default function Home() {
  return (
    <main className="min-h-screen bg-black"> 
     <BackGroundLight />
      <Header />
      <Hero />
      <CreatorsSection/>
    </main>
  )
}
