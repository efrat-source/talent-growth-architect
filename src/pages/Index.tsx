import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Users, 
  Lightbulb, 
  GraduationCap, 
  Target, 
  TrendingUp, 
  Briefcase,
  CheckCircle2,
  ArrowLeft,
  Brain,
  Handshake,
  Award,
  Quote,
  Code,
  Calendar,
  FileText,
  AlertCircle
} from "lucide-react";
import consultantPortrait from "@/assets/consultant-portrait.jpg";
import googleLogo from "@/assets/google-logo.png";
import lyftLogo from "@/assets/lyft-logo.png";
import nextInsuranceLogo from "@/assets/next-insurance-logo.png";
import workaroundLogo from "@/assets/workaround-logo.png";
import blogDecisions from "@/assets/blog-decisions.jpg";
import blogFit from "@/assets/blog-fit.jpg";
import blogPartnership from "@/assets/blog-partnership.jpg";

const Index = () => {
  // Detect if page is in iframe for embedding
  const isEmbedded = typeof window !== 'undefined' && window.self !== window.top;
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Workaround",
        "url": "https://lovable.dev/",
        "logo": "https://lovable.dev/workaround-logo.png",
        "description": "ייעוץ וליווי מקצועי בתחום הגיוס, קורסים וסדנאות בגיוס טכנולוגי ובעידן הבינה המלאכותית",
        "founder": {
          "@type": "Person",
          "name": "Efrat Dagan",
          "jobTitle": "יועצת ומלווה בתחום הגיוס",
          "description": "מומחית גיוס בעלת ניסיון בחברות גלובליות כמו Google, Lyft ו-Next Insurance"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+972-55-500-1909",
          "contactType": "Customer Service",
          "availableLanguage": ["he", "en"]
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "Workaround - שירותי ייעוץ וליווי בגיוס",
        "description": "שירותי ייעוץ וליווי מקצועיים בתחום הגיוס, קורסים, סדנאות ואיתור בכירים",
        "provider": {
          "@type": "Organization",
          "name": "Workaround"
        },
        "areaServed": "IL",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "שירותי גיוס",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ייעוץ בנושאי גיוס ואסטרטגיית גיוס",
                "description": "פיצוח אתגרי גיוס ובניית תהליכים יעילים"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "ליווי מנהלי ומחלקות גיוס",
                "description": "חיזוק צוותים ופיתוח מקצועי מתמיד"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "קורסים, הדרכות והרצאות",
                "description": "העברת ידע ושיטות עבודה מתקדמות"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "שירותי איתור בכירים, גיוס והשמה",
                "description": "מציאת המועמדים המושלמים לארגון"
              }
            }
          ]
        }
      }
    ]
  };
  
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background" dir="rtl">
      <main>
        {/* Hero Section */}
        <section className={`relative flex items-center justify-center overflow-hidden ${isEmbedded ? 'py-16' : 'min-h-[90vh]'}`} aria-label="Hero">
        <div 
          className="absolute inset-0 z-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              גיוס הוא לא רק תהליך, הוא מערכת קבלת החלטות.
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-muted-foreground leading-relaxed">
              אנחנו עוזרים לארגונים לבנות גיוס מדויק, מבוסס דאטה, שמחזיק גם תחת לחץ וצמיחה מהירה.
            </p>
            <p className="text-lg md:text-xl mb-10 text-muted-foreground font-light">
              ייעוץ וליווי | אסטרטגיית גיוס | גיוס בכירים | קורסים והרצאות
            </p>
            <Button variant="default" size="xl" className="font-semibold shadow-xl" asChild>
              <a href="https://wa.me/972555001909" target="_blank" rel="noopener noreferrer">
                בואו נגייס יחד
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-secondary to-accent bg-clip-text text-transparent">
              מה אני עושה?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              אני עוזרת לארגונים לקבל החלטות טובות יותר על אנשים, באמצעות בניית מערכות גיוס מדויקות, מבוססות דאטה.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">חיזוק מנהלים וצוותי גיוס</h3>
                  <p className="text-muted-foreground">בניית אסטרטגיית גיוס שמחזיקה גם תחת צמיחה מהירה, ומייצרת החלטות עקביות, מדויקות ומבוססות דאטה</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">ליווי מנהלי ומחלקות גיוס</h3>
                  <p className="text-muted-foreground">חיזוק צוותים ופיתוח מקצועי מתמיד</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">קורסים, הדרכות והרצאות</h3>
                  <p className="text-muted-foreground">העברת ידע ושיטות עבודה מתקדמות</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">שירותי איתור בכירים, גיוס והשמה</h3>
                  <p className="text-muted-foreground">איתור וגיוס בכירים תוך שמירה על סטנדרט קבלת החלטות גבוה, גם בתפקידים קריטיים לארגון</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <a href="https://www.workaroundnow.com/%D7%A7%D7%95%D7%A8%D7%A1%D7%99%D7%9D" target="_blank" rel="noopener noreferrer">קורסים</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://www.workaroundnow.com/%D7%A1%D7%93%D7%A0%D7%90%D7%95%D7%AA" target="_blank" rel="noopener noreferrer">סדנאות</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://www.workaroundnow.com/%D7%9C%D7%99%D7%95%D7%95%D7%99-%D7%95%D7%99%D7%99%D7%A2%D7%95%D7%A5" target="_blank" rel="noopener noreferrer">ליווי וייעוץ</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://www.workaroundnow.com/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%91%D7%9B%D7%99%D7%A8%D7%99%D7%9D" target="_blank" rel="noopener noreferrer">איתור בכירים</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 text-center md:text-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">הסיפור שלי</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                בתחילת הקריירה שלי הייתה לי הזדמנות לקחת חלק בבניית נוכחות ה־R&D של Google בישראל, תוך גיוס מהנדסים ומובילים טכנולוגיים לצוות שצמח במהירות ופעל תחת ציפיות גבוהות במיוחד.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                מה שלמדתי באותן שנים הוא שגיוס בהיקפים גדולים כמעט אף פעם לא עוסק רק באיוש משרות — אלא בבניית מערכת שמגנה על איכות קבלת ההחלטות בזמן שהארגון נע מהר.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                כשכל גיוס באמת משנה, אינטואיציה בלבד לא מספיקה. צריך מבנה, מסגרות הערכה ברורות, ומנהלים שמבינים את התפקיד שלהם בתוך תהליך הגיוס.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                החוויה הזו עיצבה את הדרך שבה אני חושבת על טאלנט עד היום: חברות מצוינות לא רק מגייסות טוב — הן בונות ארכיטקטורות לקבלת החלטות טובות יותר על אנשים.
              </p>
            </div>
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="relative mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-20" />
                <img 
                  src={consultantPortrait} 
                  alt="אפרת דגן - יועצת ומלווה בכירה בתחום הגיוס עם ניסיון ב-Google, Lyft ו-Next Insurance"
                  className="relative rounded-full w-80 h-80 object-contain shadow-2xl border-4 border-white mx-auto"
                  style={{ objectPosition: '20% center' }}
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 border-r-4 border-accent/30 pr-8 mr-4">
            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={googleLogo} alt="לוגו Google" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={googleLogo} alt="לוגו Google" className="h-8 object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Google</h3>
                <p className="text-muted-foreground mb-3">ייסדה את צוות המו"פ של גוגל בישראל. עמדה בראש צוות הגיוס.</p>
                <ul className="text-foreground space-y-2 list-disc list-inside">
                  <li>הובילה גיוס עבור חלק מאתרי גוגל ב-EMEA</li>
                  <li>הובילה את הגיוס ל-WAZE מאז הרכישה ב-2013</li>
                  <li>מנהלת גיוס גלובלית במטה גוגל ב-MTV, קליפורניה</li>
                </ul>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={lyftLogo} alt="לוגו Lyft" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={lyftLogo} alt="לוגו Lyft" className="h-7 object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Lyft</h3>
                <p className="text-muted-foreground mb-3">ראש פונקציות גיוס גלובליות | חטיבת הרכבים האוטונומיים</p>
                <p className="text-foreground">ניהול צוותים חוצי-יבשות ובניית תשתיות גיוס לארגונים בצמיחה מואצת</p>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={nextInsuranceLogo} alt="לוגו Next Insurance" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={nextInsuranceLogo} alt="לוגו Next Insurance" className="h-7 object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Next Insurance</h3>
                <p className="text-muted-foreground mb-3">ראש פונקציות גיוס גלובליות</p>
                <p className="text-foreground">ניהול צוותים חוצי-יבשות ובניית תשתיות גיוס לארגונים בצמיחה מואצת</p>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={workaroundLogo} alt="לוגו Workaround" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={workaroundLogo} alt="לוגו Workaround" className="h-8 object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Workaround</h3>
                <p className="text-muted-foreground mb-3">ייעוץ והדרכה לצוותי גיוס ומנהלים</p>
                <p className="text-foreground">העברת ידע, פיתוח תהליכים והובלת שינוי אסטרטגי בארגונים</p>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12 p-8 bg-gradient-to-l from-secondary/10 to-accent/10 rounded-2xl">
            <p className="text-2xl md:text-3xl font-light italic text-foreground leading-relaxed">
              "הצלחת הארגון נקבעת באנשים שבוחרים להצטרף אליו – וזה מתחיל בגיוס נכון"
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">מה מקבלים בעבודה איתי</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "תהליכי גיוס יעילים, שקופים ומבוססי נתונים",
              "שפה משותפת בין הנהלה, מנהלים מגייסים וצוותי גיוס",
              "מיצוב מקצוע הגיוס כשותף עסקי משמעותי",
              "פיתוח וחיזוק צוותי גיוס – מקצועית ואישית",
              "שיפור תוצאות, קבלת החלטות ואיכות גיוסים לאורך זמן"
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium leading-relaxed">{benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">סדנאות</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              סדנאות מעשיות המשלבות ידע עדכני עם כלים מעשיים לשיפור מיידי
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workshop 1 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-2 break-words">גיוס לעידן הבינה</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                בעולם שבו הבינה המלאכותית משנה את הדרך שבה אנחנו מחפשים, ממיינים ומקבלים החלטות — אנשי הגיוס צריכים לפתח שרירים חדשים.
              </p>

              <div className="border-t pt-6">
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>היכרות מעשית עם AI וכלים לשימוש יומיומי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איך לדעות ערך אמיתי מול hype</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>שילוב בינה מלאכותית ותשובה אנושית בתהליכי גיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>חיזוק יכולת כמו חיבור עסקי ועבודה עם נתונים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איך נראה תפקיד המגייס העתידי</span>
                  </li>
                </ul>
                
                <div className="text-sm text-accent font-medium">
                  ⏱️ סדרת הרצאות | 2-2.5 שעות למפגש | פרונטלי / בזום
                </div>
              </div>
            </Card>

            {/* Workshop 2 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-2 break-words">ראיונות בעידן הבינה</h3>
                  <p className="text-lg font-semibold text-secondary">האנושיות נשארת, אבל השיטה משתנה</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                בעולם שבו מועמדים משתמשים ב־AI כדי ללטש תשובות, לזהות מגמות ולספר סיפור מושלם, המראיין חייב לדעת לשאול אחרת, לזהות עומק אמיתי ולהשתמש בכלים חכמים בעצמו.
              </p>

              <div className="border-t pt-6">
                <p className="text-foreground mb-4 font-medium">
                  הסדנה נועדת למנהלים, צוותי גיוס ומשאבי אנוש
                </p>
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">📊</span>
                    <span>מתודולוגיה קלאסית (Behavioral, STAR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">🧠</span>
                    <span>כלים אבחוניים לראיון עומק</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">🤖</span>
                    <span>הבנה של השפעת הבינה המלאכותית על ראיונות העבודה</span>
                  </li>
                </ul>
                
                <div className="text-sm text-secondary font-medium">
                  ⏱️ סדנת עומק | מתאים למנהלים וצוותי גיוס
                </div>
              </div>
            </Card>

            {/* Workshop 3 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">לגייס לפי כישורים, לא לפי תפקידים</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                למה גיוס מבוסס-כישורים הוא העתיד של שוק העבודה.
              </p>

              <div className="border-t pt-6">
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איך מנסחים הגדרות תפקיד חדשות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איך מזהים פוטנציאל ולא רק ניסיון</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איך בונים תהליכים שמיצרים הוגנות והזדמנויות אמיתיות</span>
                  </li>
                </ul>
                
                <div className="text-sm text-accent font-medium">
                  ⏱️ שעה וחצי | פרונטלי / בזום
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="default" 
              size="xl"
              asChild
            >
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                מלא טופס לפרטים נוספים על הסדנאות
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">קורסים</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              קורסים מקיפים המשלבים ידע תיאורטי עם תרגול מעשי לפיתוח מקצועי מתמשך
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Course 1 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold mb-2 break-words">ניהול גיוס בעידן הבינה המלאכותית</h3>
                  <p className="text-lg font-semibold text-accent">מנהלי גיוס מובילים פונקציה חכמה, מבוססת דאטה ובינה</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                איך נראית פונקצית גיוס בעולם שבו AI כבר חלק מתצוגת שלך? 
                בקורס ייחודי וחדשני זה נלמד כיצד לשלב בינה מלאכותית בתהליכי הגיוס – לא כגאדג'ט, 
                אלא בכלי ניהולי, אסטרטגי ואנושי.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  מה לומדים בקורס:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>הבנת הטכנולוגיות וכלי ה-AI הרלוונטיים לגיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>בניית אסטרטגיה מבוססת נתונים עם AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>שימוש נכון ב-AI לכל שלבי תהליך הגיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ניהול צוות גיוס בעידן הדיגיטלי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>שמירה על האנושיות בתהליכי גיוס מבוססי AI</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Course 2 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Code className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">קורס גיוס טכנולוגי</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      8 מפגשים
                    </span>
                    <span>16 שעות אקדמיות</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                קורס מקיף המיועד למגייסים בתחום הטכנולוגי. 
                הקורס מעניק כלים מעשיים להבנת התפקידים הטכנולוגיים, שיטות איתור ואיך לנהל שיחה אפקטיבית עם מועמדים טכנולוגיים.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  מה לומדים בקורס:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>הבנת התפקידים הטכנולוגיים והסקטור</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>שיטות חיפוש ואיתור מועמדים טכנולוגיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>ניהול שיחת סקרינינג עם מועמדים טכנולוגיים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>בניית קשרים עם מועמדים בתחום הטכנולוגי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>כלי AI לגיוס טכנולוגי יעיל</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="default" 
              size="xl"
              asChild
            >
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                מלא טופס לפרטים נוספים על הקורסים
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">מה אומרים עלי</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              המלצות מארגונים ומנהלים שעבדתי איתם
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Real Testimonial 1 - Yuval Tadmor */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "עבדתי עם אפרת על ניהול ותהליכי עבודה, ואני ממליץ עליה בחום. היא מקצועית, ממוקדת ומצליחה להעביר ידע בצורה ברורה ומובנת. במהלך המפגשים היא עזרה לי לעשות סדר בראש, נתנה הדרכה מצוינת ושיתפה דוגמאות מהחיים שישועו לי להתמודד עם סיטואציות שונות ולמצוא להן פתרונות. תודה רבה על הליווי והתמיכה!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">Yuval Tadmor</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>

            {/* Real Testimonial 2 - Yael Vitelzon */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-secondary/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "Working with Efrat Dagan was an absolute pleasure. She helped me shape and refine our structured hiring process, quickly understanding our needs and adapting the approach to fit perfectly. Her professionalism, expertise, and insightful guidance made a real difference, and she did it all with such a positive and collaborative attitude. I truly enjoyed working with her and highly recommend her to anyone looking for a knowledgeable and engaging talent acquisition consultant."
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">יעל ויטלזון</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>

            {/* Real Testimonial 3 - Moriya Stalkovsky */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "I've had the privilege of working with Efrat, and she is without a doubt one of the most professional and impactful Talent Acquisition leaders I've ever met. She guided me through a deep and precise process to enhance my leadership skills in TA, combining a strategic approach, practical tools, and constant support. Thanks to her, I was able to refine processes, strengthen my team leadership, and tackle challenges more effectively. I highly recommend her to anyone looking to take their recruitment challenges to the next level"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">Moriya Stalkovsky</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>

            {/* Real Testimonial 4 - Ilana Roitman-Aloni */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-secondary/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "העבודה שלי עם אפרת החלה לפני כשלוש שנים. אני יכולה להעיד ממקור ראשון שאפרת מביאה איתה המון הבנה וידע מקצועיים בתהליכי גיוס טכנולוגיים גלובליים ולוקאליים, שיטות גיוס מתקדמות, מדידה בג'וס, ייעול תהליכי גיוס וחיד עוד נטויה. אפרת עזרה לי המון ברמה האישית ואני ממליצה עליה מאוד לכל מי שצריך סיוע בהקמת תהליכי ותשתיות גיוס מאפס וגם כאלה שצריכים לטייב ולשפר אותם. תענוג לעבוד איתה!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">אילנה רויטמן-אלוני</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>

            {/* Real Testimonial 5 - Mor Basson Toren */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "שמחתי מאוד לעבוד עם אפרת ולקבל ממנה מספר שירותים, לרבות קואוצ'ינג עם כניסה לתפקיד מנהלת גיוס הכולל בניית אסטרטגיה וליווי שוטף, השמת בכירים וקורס ראיונות התנהגותיים. אפרת בעלת ניסיון רב, שירותית ביותר ומקצועית. ממליצה בחום!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">מור בסון תורן</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>

            {/* Real Testimonial 6 - Ayelet Heiferman */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 relative">
              <Quote className="w-12 h-12 text-secondary/20 absolute top-6 right-6" />
              <div className="relative z-10">
                <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                  "About two years ago, we experienced a major hiring peak alongside a significant expansion of our recruitment team – growing from 3 to 15 people! During this time, Efrat provided me with invaluable guidance and support around building recruitment infrastructure, defining strategy, and making key decisions. Our weekly work sessions were not only insightful, but also practical – I learned a lot and was able to apply many of the best practices she shared into our recruitment processes. It was always a pleasure meeting with Efrat – she brings deep expertise, fresh perspectives, and real innovation to the world of recruitment. Thank you so much, Dear Efrat! Would love working with you again!"
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">Ayelet Heiferman</p>
                  <p className="text-sm text-muted-foreground">⭐⭐⭐⭐⭐ ביקורת Google</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">יצירת קשר</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              מעוניינים בקורס, סדנה או ייעוץ? השאירו פרטים ואחזור אליכם בהקדם
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const phone = formData.get('phone') as string;
              const email = formData.get('email') as string;
              const service = formData.get('service') as string;
              const message = formData.get('message') as string;
              
              const serviceNames: Record<string, string> = {
                'workshops': 'סדנאות',
                'courses': 'קורסים',
                'consulting': 'ייעוץ וליווי',
                'executive-search': 'איתור בכירים',
                'other': 'אחר'
              };
              
              let whatsappMessage = `שלום, אני מעוניין/ת ביצירת קשר\n\n`;
              whatsappMessage += `שם: ${name}\n`;
              whatsappMessage += `טלפון: ${phone}\n`;
              whatsappMessage += `אימייל: ${email}\n`;
              whatsappMessage += `שירות: ${serviceNames[service] || service}\n`;
              if (message) {
                whatsappMessage += `\nהודעה: ${message}`;
              }
              
              const encodedMessage = encodeURIComponent(whatsappMessage);
              window.open(`https://wa.me/972555001909?text=${encodedMessage}`, '_blank');
            }} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">שם מלא *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="הזן שם מלא"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">טלפון *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="הזן מספר טלפון"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">אימייל *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="הזן כתובת אימייל"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">בחר שירות *</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">בחר שירות</option>
                  <option value="workshops">סדנאות</option>
                  <option value="courses">קורסים</option>
                  <option value="consulting">ייעוץ וליווי</option>
                  <option value="executive-search">איתור בכירים</option>
                  <option value="other">אחר</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">הודעה</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="ספר לנו קצת על הצורך שלך..."
                />
              </div>

              <div className="flex items-center justify-center pt-4">
                <Button type="submit" variant="default" size="xl" className="font-semibold">
                  שלח פנייה
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-secondary to-accent bg-clip-text text-transparent">
              פוסטים אחרונים בבלוג
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              תובנות, טיפים ומאמרים מעולם הגיוס והניהול
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/20">
              <a 
                href="https://www.workaroundnow.com/post/%D7%94%D7%97%D7%9C%D7%98%D7%95%D7%AA%D7%A7%D7%9C%D7%95%D7%AA-%D7%94%D7%92%D7%95%D7%A8%D7%9D%D7%94%D7%9E%D7%A4%D7%AA%D7%99%D7%A2%D7%9C%D7%98%D7%A2%D7%95%D7%99%D7%95%D7%95%D7%AA%D7%92%D7%99%D7%95%D7%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blogDecisions} 
                    alt="החלטות קלות בגיוס - איור של תהליך קבלת החלטות"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>מאמר</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    החלטות קלות – הגורם המפתיע לטעויות גיוס
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    איך החלטות אוטומטיות משפיעות על איכות הגיוס שלנו
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                    <span>קרא עוד</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/20">
              <a 
                href="https://www.workaroundnow.com/post/%D7%90%D7%9E%D7%A8%D7%95-%D7%9C%D7%99-%D7%96%D7%94-%D7%91%D7%A1%D7%93%D7%A8-%D7%A9%D7%97%D7%A6%D7%99-%D7%9C%D7%90-%D7%99%D7%AA%D7%90%D7%99%D7%9E%D7%95-%D7%96%D7%94-%D7%97%D7%9C%D7%A7-%D7%9E%D7%94%D7%9E%D7%A9%D7%97%D7%A7-%D7%A8%D7%A7-%D7%A9%D7%96%D7%94-%D7%9C%D7%90-%D7%9E%D7%A9%D7%97%D7%A7-%D7%A1%D7%99%D7%A4%D7%95%D7%A8-%D7%90%D7%9E%D7%99%D7%AA%D7%99-%D7%A9%D7%A7%D7%A8%D7%94-%D7%91%D7%90%D7%9E%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blogFit} 
                    alt="התאמת מועמדים - איור של חתיכות פאזל שלא מתאימות"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>מאמר</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    "זה בסדר שחצי לא יתאימו" – למה זה לא בסדר
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    למה גישה של "זה חלק מהמשחק" עלולה לעלות יקר לארגון
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                    <span>קרא עוד</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/20">
              <a 
                href="https://www.workaroundnow.com/post/%D7%91%D7%99%D7%96%D7%A0%D7%A1-%D7%A4%D7%A8%D7%98%D7%A0%D7%A8-%D7%94%D7%90%D7%95%D7%AA%D7%99%D7%95%D7%AA-%D7%94%D7%A7%D7%98%D7%A0%D7%95%D7%AA"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={blogPartnership} 
                    alt="ביזנס פרטנר - איור של שותפות עסקית ולחיצת יד"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>מאמר</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    ביזנס פרטנר – האותיות הקטנות
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    מה באמת נדרש כדי להיות שותף עסקי אמיתי בארגון
                  </p>
                  <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-2 transition-all duration-300">
                    <span>קרא עוד</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="group" asChild>
              <a href="https://www.workaroundnow.com/blog" target="_blank" rel="noopener noreferrer">
                לקריאת הבלוג
                <ArrowLeft className="mr-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      </main>
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t" role="contentinfo">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Workaround</h3>
          <p className="text-muted-foreground mb-6">גיוס חכם משנה את פני הארגון</p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://wa.me/972555001909" target="_blank" rel="noopener noreferrer">
              בואו נדבר
            </a>
          </Button>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;
