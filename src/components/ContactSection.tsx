import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Flourish from "./Flourish";

const ContactSection = () => {
  return (
    <section id="contact" className="stone-texture section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-[0.15em] gold-gradient-text mb-6">
            Contact
          </h2>
          <Flourish size="sm" />
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-display text-sm tracking-[0.15em] text-primary uppercase mb-1">Address</h4>
                <p className="font-body text-foreground/70">KALLISTO Restaurant, Prism Hospitality Building, Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-display text-sm tracking-[0.15em] text-primary uppercase mb-1">Phone</h4>
                <p className="font-body text-foreground/70">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-primary mt-1 shrink-0" size={20} />
              <div>
                <h4 className="font-display text-sm tracking-[0.15em] text-primary uppercase mb-1">Email</h4>
                <p className="font-body text-foreground/70">info@kallisto.pk</p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-primary/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-primary/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          <div className="border border-border/30 bg-card/30 flex items-center justify-center min-h-[280px]">
            <p className="font-display text-sm tracking-[0.15em] text-muted-foreground uppercase">Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
