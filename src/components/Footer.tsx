import Flourish from "./Flourish";

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border py-12 px-4">
      <div className="container mx-auto text-center">
        <Flourish size="sm" className="mb-6" />
        <h3 className="font-display text-2xl tracking-[0.3em] text-primary mb-2">KALLISTO</h3>
        <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase mb-6">
          Multi-Level Restaurant by Prism Hospitality
        </p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} KALLISTO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
