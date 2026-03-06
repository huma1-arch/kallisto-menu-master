import interiorImg from "@/assets/interior.jpg";
import Flourish from "./Flourish";

const AboutSection = () => {
  return (
    <section id="about" className="stone-texture section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Our Story</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-[0.15em] gold-gradient-text mb-6">
            A Mythic Experience
          </h2>
          <Flourish size="sm" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              KALLISTO is not merely a restaurant — it is a journey through time. Inspired by the grandeur of ancient civilizations, our multi-level dining sanctuary is carved from dark stone, adorned with golden light, and filled with the aroma of culinary mastery.
            </p>
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Each level tells a different story. From the intimate candlelit alcoves of the lower chambers to the grand hall with its soaring columns, every corner of KALLISTO invites you to dine like the legends of old.
            </p>
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Brought to life by Prism Hospitality, KALLISTO blends world-class cuisine with an atmosphere that transcends the ordinary — where every meal becomes a mythic occasion.
            </p>
          </div>
          <div className="relative">
            <div className="border border-primary/30 p-2">
              <img
                src={interiorImg}
                alt="KALLISTO restaurant interior with grand columns and candlelit tables"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
