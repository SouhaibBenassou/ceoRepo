import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import CreatorsSection from "@/components/creators"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CreatorsSection/>
      <LogoCloud />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
