import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-accent/10 rounded-full">
              <Zap className="h-12 w-12 text-accent" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-serif text-primary mb-6 leading-tight">
            5G Network Operations Efficiency Powered by Artificial Intelligence
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Public and private sector stakeholders around the world seek ways to ensure that wireless communications
            provide the level of reliability and resilience we have long taken for granted from the wireline network.
            Unfortunately, despite the societal and economic impact of wireless connectivity disruptions, we lack
            real-time scalable tools and validated methodologies to identify and understand large-scale wireless network
            outages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Learn More About Our Solution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
