import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

import type WithT from "./with-t-props"

export function HeroSection({ t }: WithT) {
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
            {t('hero.title')}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              {t('hero.learnMore')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              {t('hero.caseStudies')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
