import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EfficiencySection } from "@/components/efficiency-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { AboutSection } from "@/components/about-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EfficiencySection />
      <ProblemSection />
      <SolutionSection />
      <AboutSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  )
}
