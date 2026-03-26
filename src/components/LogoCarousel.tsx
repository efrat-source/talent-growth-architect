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
  return (
    <section className="py-12 bg-background border-b border-border/30">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="text-center text-sm text-muted-foreground font-medium tracking-wide mb-8">
          עובדת עם חברות מובילות בתעשייה
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 h-10">
              {'src' in logo ? (
                <img src={logo.src} alt={logo.alt} className="h-8 object-contain" loading="lazy" />
              ) : (
                <span className="text-base font-bold text-muted-foreground whitespace-nowrap">{logo.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
