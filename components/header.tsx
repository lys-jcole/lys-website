import { Button } from "@/components/ui/button"
import { Network } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Network className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold font-serif text-primary">Lys Intelligence</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#efficiency" className="text-muted-foreground hover:text-primary transition-colors">
            Efficiency
          </a>
          <a href="#problem" className="text-muted-foreground hover:text-primary transition-colors">
            The Problem
          </a>
          <a href="#solution" className="text-muted-foreground hover:text-primary transition-colors">
            Our Solution
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-colors">
            Why Choose Us
          </a>
        </nav>

        <Button asChild className="bg-accent hover:bg-accent/90">
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </header>
  )
}
