import { CheckCircle } from "lucide-react"

export function SolutionSection() {
  return (
    <section id="solution" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/ai-noc-dashboard.png"
              alt="AI Network Operations Solution"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">Our Solution</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We have developed a software solution to early detect and solve all wireless network challenges.
            </p>
            <p className="text-muted-foreground mb-6">
              We monitor key KPIs in real time for leveraging RAN, Core, and Transport IP.
            </p>
            <p className="text-muted-foreground mb-8">
              We apply Machine Learning (ML) and Artificial Intelligence (AI) methodologies, to identify/detect bad root
              causes and automate the resolution.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Open-only Network for network data usage</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Maximize the operational base for end-users</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Maximize the efficiency of the 5G System</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">Prevent manual loss</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
