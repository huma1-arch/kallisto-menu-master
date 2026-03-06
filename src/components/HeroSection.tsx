import heroBg from "@/assets/hero-bg.jpg";
import Flourish from "./Flourish";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <Flourish size="md" className="mb-6" />
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] gold-gradient-text mb-4">
          KALLISTO
        </h1>
        <p className="font-display text-sm md:text-base tracking-[0.3em] text-primary/80 uppercase mb-3">
          Multi-Level Restaurant by Prism Hospitality
        </p>
        <p className="font-body text-lg md:text-xl text-foreground/60 italic mb-10 max-w-xl mx-auto">
          Where ancient grandeur meets modern gastronomy — a mythic dining experience carved in stone and bathed in gold
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="gold-gradient-bg text-primary-foreground font-display text-sm tracking-[0.2em] uppercase px-10 py-4 hover:opacity-90 transition-opacity"
          >
            View Menu
          </a>
          <a
            href="#reservation"
            className="border border-primary text-primary font-display text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary/10 transition-colors"
          >
            Reserve Table
          </a>
        </div>
        <Flourish size="md" className="mt-10" />
      </div>
    </section>
  );
};

export default HeroSection;
