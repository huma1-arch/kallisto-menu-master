import food1 from "@/assets/food1.jpg";
import food2 from "@/assets/food2.jpg";
import food3 from "@/assets/food3.jpg";
import food4 from "@/assets/food4.jpg";
import interior from "@/assets/interior.jpg";
import interior2 from "@/assets/interior2.jpg";
import Flourish from "./Flourish";

const images = [
  { src: interior, alt: "Grand dining hall with ancient columns" },
  { src: food1, alt: "Signature grilled steak" },
  { src: food2, alt: "Artisan pasta dish" },
  { src: interior2, alt: "Multi-level stone interior" },
  { src: food3, alt: "Wasabi prawns appetizer" },
  { src: food4, alt: "Crispy chicken burger" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="stone-texture section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary/60 uppercase mb-4">Visual Journey</p>
          <h2 className="font-display text-3xl md:text-5xl tracking-[0.15em] gold-gradient-text mb-6">
            Gallery
          </h2>
          <Flourish size="sm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden border border-border/30 group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
