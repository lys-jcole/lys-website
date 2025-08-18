import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, BarChart3, FileText } from "lucide-react"

export function ProblemSection() {
  return (
    <section id="problem" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">The Problem?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wireless networks experience the challenge of a real challenge in Wireless Operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <BarChart3 className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">KPI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">No visibility on the KPI degradation for a real-time manner.</p>
              <p className="text-sm text-muted-foreground">No sense of urgency to solve the troubles efficiently.</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">Reactive</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Faults detected only when they fully surface and customers are impacted.
              </p>
              <p className="text-sm text-muted-foreground">
                There is a lack of real-time tools to solve wireless network outages.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-destructive/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-destructive" />
              </div>
              <CardTitle className="font-serif">Manual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Thousands of tickets with very few tools leading to low customer experience incidents.
              </p>
              <p className="text-sm text-muted-foreground">We are simply faced that we are ill-equipped to respond.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
