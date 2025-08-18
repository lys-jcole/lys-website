import { Users, Target, Award } from "lucide-react"
import type WithT from "./with-t-props"
import Image from "next/image"

export function AboutSection({ t }: WithT) {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-muted-foreground mb-8">
              {t('about.partnering')}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{t('about.expertTeam.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.expertTeam.description')}</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{t('about.focusedMission.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.focusedMission.description')}</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">{t('about.provenResults.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('about.provenResults.description')}</p>
              </div>
            </div>
          </div>

            <div className="relative">
            <Image
              src="/ai-network-montreal.png"
              alt={t('about.imageAlt') as string}
              className="rounded-lg shadow-lg w-full"
              width={800}
              height={600}
              priority
            />
            </div>
        </div>
      </div>
    </section>
  )
}
