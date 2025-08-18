import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Clock, Shield, TrendingUp } from "lucide-react"

import type WithT from "./with-t-props"

export function WhyChooseUsSection({ t }: WithT) {
  return (
    <section id="why-choose-us" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">{t('whyChooseUs.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('whyChooseUs.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">{t('whyChooseUs.innovation.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('whyChooseUs.innovation.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">{t('whyChooseUs.realTime.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('whyChooseUs.realTime.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">{t('whyChooseUs.reliability.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('whyChooseUs.reliability.desc')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">{t('whyChooseUs.results.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t('whyChooseUs.results.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
