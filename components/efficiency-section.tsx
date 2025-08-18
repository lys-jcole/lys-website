import { TrendingUp, Shield, Cpu } from "lucide-react"
import Image from 'next/image'

import type WithT from "./with-t-props"

export function EfficiencySection({ t }: WithT) {
  return (
    <section id="efficiency" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">{t('efficiency.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('efficiency.intro')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{t('efficiency.wealth.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('efficiency.wealth.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{t('efficiency.missionCritical.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('efficiency.missionCritical.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cpu className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">{t('efficiency.futureOps.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('efficiency.futureOps.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div className="relative">
            <Image
              src="/5g-network-visualization.png"
              alt={t('efficiency.imageAlt') as string}
              className="rounded-lg shadow-lg w-full"
              fill={false}
              width={600}
              height={400}
              priority
            />
            </div>
        </div>
      </div>
    </section>
  )
}
