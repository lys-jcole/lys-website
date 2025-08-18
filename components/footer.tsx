import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Network, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Network className="h-8 w-8" />
              <span className="text-2xl font-bold font-serif">Lys Intelligence</span>
            </div>

            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Transforming 5G network operations with AI-powered solutions for real-time monitoring, predictive
              analytics, and automated problem resolution.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">Montreal, Canada</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">info@lys-intelligence.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">+1 (514) 555-0123</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold font-serif mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="w-full bg-accent hover:bg-accent/90">Send Message</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Lys Intelligence. All rights reserved. | Empowering the future of 5G networks.
          </p>
        </div>
      </div>
    </footer>
  )
}
