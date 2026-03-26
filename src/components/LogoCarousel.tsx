import googleLogo from "@/assets/google-logo.png";
import lyftLogo from "@/assets/lyft-logo.png";
import nextInsuranceLogo from "@/assets/next-insurance-logo.png";

const logos = [
  { src: googleLogo, alt: "Google" },
  { src: lyftLogo, alt: "Lyft" },
  { src: nextInsuranceLogo, alt: "Next Insurance" },
  { text: "Gong.io", color: "hsl(270, 60%, 55%)" },
  { text: "Lightricks", color: "hsl(340, 75%, 55%)" },
  { text: "Cloudinary", color: "hsl(210, 70%, 50%)" },
  { text: "Monday", color: "hsl(150, 65%, 40%)" },
  { text: "Intuit", color: "hsl(160, 55%, 40%)" },
  { text: "Checkpoint", color: "hsl(350, 70%, 50%)" },
  { text: "Hello Heart", color: "hsl(0, 65%, 55%)" },
  { text: "Gilat", color: "hsl(210, 60%, 45%)" },
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
            <div key={i} className="flex items-center justify-center hover:scale-110 transition-all duration-300 h-10">
              {'src' in logo ? (
                <img src={logo.src} alt={logo.alt} className="h-8 object-contain" loading="lazy" />
              ) : (
                <span className="text-base font-bold whitespace-nowrap" style={{ color: logo.color }}>{logo.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
