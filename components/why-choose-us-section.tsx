import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Clock, Shield, TrendingUp } from "lucide-react"

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Why Choose Lys Intelligence?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver cutting-edge AI solutions that transform how telecom networks operate and perform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Cutting-edge AI and ML technologies applied to real-world telecom challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">Real-Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Instant detection and resolution of network issues before they impact customers.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Proven solutions trusted by major telecom operators across North America.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-serif">Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Measurable improvements in network efficiency and customer satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
