import { TrendingUp, Shield, Cpu } from "lucide-react"

export function EfficiencySection() {
  return (
    <section id="efficiency" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">It's All About Efficiency</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Lys can be counted as very high and unprecedented efficiency kind of solution. We are not just about the
              same or less regard. The meaning of our network architectures and their output from the conventional
              practices to become fully intelligent and automated.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Wealth of New Opportunities</h3>
                  <p className="text-muted-foreground">
                    5G is expected to bring a wealth of new opportunities in the telecom sector.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Mission Critical Applications</h3>
                  <p className="text-muted-foreground">
                    Mission critical applications will need ultra-reliable connection and guaranteed low latency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cpu className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Future Operations</h3>
                  <p className="text-muted-foreground">
                    The Future Operations are already overwhelmed by a data tsunami. They cannot keep up with the
                    additional 5G use cases data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/5g-network-visualization.png"
              alt="5G Network Visualization"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
