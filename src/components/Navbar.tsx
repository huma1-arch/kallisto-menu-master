import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reserve", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-display text-xl md:text-2xl tracking-[0.3em] text-primary">
          KALLISTO
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border pb-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 font-display text-sm tracking-[0.15em] text-foreground/70 hover:text-primary transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
