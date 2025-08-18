import { Users, Target, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">About Us</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Lys Intelligence was founded in 2020, based in Montreal. Our mission is to provide intelligence to
              automatically analyze performance data and network configuration to efficiently detect and fix network
              anomalies in a real-time manner.
            </p>
            <p className="text-muted-foreground mb-8">
              Our company is partnering with Operations of Canada and USA to build such innovative solutions.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Expert Team</h3>
                <p className="text-sm text-muted-foreground">AI and telecom specialists</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Focused Mission</h3>
                <p className="text-sm text-muted-foreground">Real-time network optimization</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Trusted by major operators</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/ai-network-montreal.png" alt="Lys Intelligence Team" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
