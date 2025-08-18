import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, BarChart3, FileText } from "lucide-react"

import type WithT from "./with-t-props"

export function ProblemSection({ t }: WithT) {
  return (
    <section id="problem" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">{t('problem.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('problem.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <BarChart3 className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">{t('problem.kpi.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{t('problem.kpi.desc1')}</p>
              <p className="text-sm text-muted-foreground">{t('problem.kpi.desc2')}</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">{t('problem.reactive.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t('problem.reactive.desc1')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('problem.reactive.desc2')}
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">{t('problem.manual.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                {t('problem.manual.desc1')}
              </p>
              <p className="text-sm text-muted-foreground">{t('problem.manual.desc2')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
