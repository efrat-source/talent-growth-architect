const logos = [
  { text: "Google" },
  { text: "Lyft" },
  { text: "Next Insurance" },
  { text: "Gong.io" },
  { text: "Lightricks" },
  { text: "Cloudinary" },
  { text: "Monday" },
  { text: "Intuit" },
  { text: "Checkpoint" },
  { text: "Hello Heart" },
  { text: "Gilat" },
  { text: "Payoneer" },
  { text: "Varonis" },
  { text: "Artlist" },
  { text: "Playtika" },
  { text: "Glassbox" },
  { text: "Personetics" },
  { text: "Nym" },
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
              <span className="text-base font-bold whitespace-nowrap text-muted-foreground">{logo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
