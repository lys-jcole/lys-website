import Image from "next/image"
import { CheckCircle } from "lucide-react"

import type WithT from "./with-t-props"

export function SolutionSection({ t }: WithT) {
  return (
    <section id="solution" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/ai-noc-dashboard.png"
              alt={t('solution.imageAlt') as string}
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">{t('solution.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('solution.desc1')}
            </p>
            <p className="text-muted-foreground mb-6">
              {t('solution.desc2')}
            </p>
            <p className="text-muted-foreground mb-8">
              {t('solution.desc3')}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{t('solution.features.one')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{t('solution.features.two')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{t('solution.features.three')}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{t('solution.features.four')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
