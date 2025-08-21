// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { Network, Mail, MapPin } from "lucide-react"

import type WithT from "./with-t-props"

export function Footer({ t }: WithT) {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Network className="h-8 w-8" />
              <span className="text-2xl font-bold font-serif">{t('footer.brand')}</span>
            </div>

            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              {t('footer.intro')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">{t('footer.location')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href={`mailto:${t('footer.email')}`}
                  className="text-primary-foreground/80 hover:underline"
                >
                  {t('footer.email')}
                </a>
              </div>
            </div>
          </div>
          {/* Form is commented out for now. Need the ok to use Formspree or something else
            that allows for serverless form handling */}
          {/* <div>
            <h3 className="text-xl font-bold font-serif mb-6">{t('footer.contactTitle')}</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder={t('footer.form.name')}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Input
                  type="email"
                  placeholder={t('footer.form.email')}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Input
                placeholder={t('footer.form.subject')}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Textarea
                placeholder={t('footer.form.message')}
                rows={4}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-accent hover:bg-accent/90">{t('footer.form.send')}</Button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
