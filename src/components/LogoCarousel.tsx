import googleLogo from "@/assets/google-logo.png";
import lyftLogo from "@/assets/lyft-logo.png";
import nextInsuranceLogo from "@/assets/next-insurance-logo.png";

const logos = [
  { src: googleLogo, alt: "Google" },
  { src: lyftLogo, alt: "Lyft" },
  { src: nextInsuranceLogo, alt: "Next Insurance" },
  { text: "Gong.io" },
  { text: "Lightricks" },
  { text: "Cloudinary" },
  { text: "Monday" },
  { text: "Intuit" },
  { text: "Checkpoint" },
  { text: "Hello Heart" },
  { text: "Gilat" },
];

const LogoCarousel = () => {
  // Double the logos array for seamless infinite scroll
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-10 bg-background overflow-hidden border-b border-border/30">
      <div className="container mx-auto max-w-6xl mb-6">
        <p className="text-center text-sm text-muted-foreground font-medium tracking-wide">
          עובדת עם חברות מובילות בתעשייה
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll gap-16 items-center w-max">
          {allLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              {'src' in logo ? (
                <img src={logo.src} alt={logo.alt} className="h-8 object-contain" loading="lazy" />
              ) : (
                <span className="text-xl font-bold text-muted-foreground whitespace-nowrap">{logo.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
