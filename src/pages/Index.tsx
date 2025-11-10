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
  Award
} from "lucide-react";
import consultantPortrait from "@/assets/consultant-portrait.jpg";
import googleLogo from "@/assets/google-logo.png";
import lyftLogo from "@/assets/lyft-logo.png";
import nextInsuranceLogo from "@/assets/next-insurance-logo.png";
import workaroundLogo from "@/assets/workaround-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ background: 'var(--gradient-hero)' }}
        />
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              כל מה שקשור בגיוס – במקום אחד
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90 leading-relaxed">
              ייעוץ, ליווי, קורסים והרצאות | גיוס בכירים | בניית אסטרטגיית גיוס עתידית
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/80 font-light">
              Workaround – כי גיוס חכם משנה את פני הארגון
            </p>
            <Button variant="hero" size="xl" className="font-semibold">
              בואו נגייס יחד
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-secondary to-accent bg-clip-text text-transparent">
              מה אני עושה
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              חיבור בין אנשים, הזדמנויות ועסקים – מתוך הבנה עמוקה של שני הצדדים
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">ייעוץ בנושאי גיוס ואסטרטגיית גיוס</h3>
                  <p className="text-muted-foreground">פיצוח אתגרי גיוס ובניית תהליכים יעילים</p>
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
                  <p className="text-muted-foreground">מציאת המועמדים המושלמים לארגון שלך</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg">קורסים</Button>
            <Button variant="secondary" size="lg">סדנאות</Button>
            <Button variant="secondary" size="lg">ליווי וייעוץ</Button>
            <Button variant="secondary" size="lg">איתור בכירים</Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">הסיפור שלי</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                לא תמיד ידעתי שאעבוד בגיוס. למדתי פסיכולוגיה, והגעתי לתחום במקרה – אבל מהר מאוד הבנתי שמצאתי את המקום שלי.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                גיוס הוא שילוב מדויק של סקרנות, הבנה אנושית וחשיבה עסקית – ואני זכיתי לגדול בו וללוות ארגונים מהשלב הראשון ועד צמיחה גלובלית.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-20" />
                <img 
                  src={consultantPortrait} 
                  alt="תמונת פרופיל"
                  className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8 border-r-4 border-accent/30 pr-8 mr-4">
            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={googleLogo} alt="Google" className="w-full h-full object-contain" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={googleLogo} alt="Google" className="h-8 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Google</h3>
                <p className="text-muted-foreground mb-3">הובלת צוותי גיוס ראשונים בישראל</p>
                <p className="text-foreground">גיוס מעל אלף עובדים בישראל, אירופה וארה"ב</p>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={lyftLogo} alt="Lyft" className="w-full h-full object-contain" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={lyftLogo} alt="Lyft" className="h-7 object-contain" />
                  <span className="text-muted-foreground">&</span>
                  <img src={nextInsuranceLogo} alt="Next Insurance" className="h-7 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Lyft & Next Insurance</h3>
                <p className="text-muted-foreground mb-3">ראש פונקציות גיוס גלובליות</p>
                <p className="text-foreground">ניהול צוותים חוצי-יבשות ובניית תשתיות גיוס לארגונים בצמיחה מואצת</p>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -right-[3.25rem] top-2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg p-1">
                <img src={workaroundLogo} alt="Workaround" className="w-full h-full object-contain" />
              </div>
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <img src={workaroundLogo} alt="Workaround" className="h-8 object-contain" />
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
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">גיוס לעידן הבינה המלאכותית</h3>
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
                  <Handshake className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">להיות שותף אמיתי בצ'ום</h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                מגייסים כשותפים עסקיים ולא רק כמבצעים.
              </p>

              <div className="border-t pt-6">
                <ul className="space-y-3 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>איך לבנות שיח אסטרטגי עם מנהלים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>איך להציג נתונים ולקבל החלטות מבוססות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>איך להגדיל השפעה מבלי לאבד גמישות</span>
                  </li>
                </ul>
                
                <div className="text-sm text-secondary font-medium">
                  ⏱️ שעתיים | מתאים גם למנהלי גיוס
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
            <Button variant="hero" size="xl">
              בואו נדבר על הסדנה המתאימה לכם
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-secondary to-accent bg-clip-text text-transparent">
              פוסטים אחרונים
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">החלטות קלות – הגורם המפתיע לטעויות גיוס</h3>
              <p className="text-muted-foreground">איך החלטות אוטומטיות משפיעות על איכות הגיוס שלנו</p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">למה כדאי לגייס לפי כישורים ולא לפי תפקידים</h3>
              <p className="text-muted-foreground">גישה חדשה לבניית צוותים בעולם משתנה</p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold mb-3">איך בונים אסטרטגיית גיוס לעידן ה-AI</h3>
              <p className="text-muted-foreground">שילוב טכנולוגיה מתקדמת עם החלטות אנושיות נכונות</p>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="group">
              לבלוג המלא
              <ArrowLeft className="mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <h3 className="text-2xl font-bold mb-4">Workaround</h3>
          <p className="text-muted-foreground mb-6">גיוס חכם משנה את פני הארגון</p>
          <Button variant="accent" size="lg">
            בואו נדבר
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
