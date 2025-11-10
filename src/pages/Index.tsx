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
  Quote
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
            <div className="order-1 md:order-2 flex items-center justify-center">
              <div className="relative mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-full blur-2xl opacity-20" />
                <img 
                  src={consultantPortrait} 
                  alt="תמונת פרופיל"
                  className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-white mx-auto"
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
                <p className="text-muted-foreground mb-3">המגייסת הראשונה בישראל</p>
                <p className="text-foreground">גיוס למעלה מ-1,000 עובדים בישראל, אירופה וארה"ב. חלק מצמיחה חסרת תקדים ומגוון אתגרים ייחודיים</p>
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
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">קורס יסודות הגיוס המקצועי</h3>
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
                קורס מקיף המיועד למגייסים חדשים או לאנשי HR שרוצים לשדרג את הידע בתחום. 
                הקורס משלב תיאוריה מתקדמת עם תרגול מעשי ומקרי מבחן אמיתיים.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  מה לומדים בקורס:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>בניית אסטרטגיית גיוס מותאמת לארגון</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>שיטות איתור וסקרינינג מועמדים יעילות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>עריכת ראיונות מובנים ומבוססי התנהגות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>קבלת החלטות גיוס מבוססת נתונים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>שיפור חווית המועמד לאורך התהליך</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Course 2 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">קורס מתקדם למנהלי גיוס</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      10 מפגשים
                    </span>
                    <span>20 שעות אקדמיות</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                קורס למנהלי גיוס ומנהלי צוותים שרוצים לשפר את היכולות האסטרטגיות והניהוליות שלהם. 
                דגש על הובלת צוותים, בניית תהליכים ושיתוף פעולה עם ההנהלה.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  מה לומדים בקורס:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>אסטרטגיה ארגונית ותכנון כוח אדם</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>הובלה וניהול צוותי גיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>מדידה, ניתוח נתונים ושיפור מתמיד</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>בניית שותפות עסקית עם מנהלים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>ניהול תקציבים וספקים חיצוניים</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Course 3 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">גיוס בעידן ה-AI והאוטומציה</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      6 מפגשים
                    </span>
                    <span>12 שעות אקדמיות</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                קורס ייחודי המתמקד בשילוב טכנולוגיות AI ואוטומציה בתהליכי גיוס, 
                תוך שמירה על החיבור האנושי והחלטות מושכלות.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  מה לומדים בקורס:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>כלי AI מובילים לתהליכי גיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>אוטומציה חכמה של משימות חוזרות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>ניתוח נתוני גיוס והפקת תובנות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>איזון בין טכנולוגיה לשיקול דעת אנושי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>בניית תהליכים עתידיים ומתקדמים</span>
                  </li>
                </ul>
              </div>
            </Card>

            {/* Course 4 */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">בניית מחלקת גיוס מצליחה</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      תוכנית ליווי
                    </span>
                    <span>3-6 חודשים</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                תוכנית ליווי מקיפה למנהלי גיוס וראשי HR שבונים או משדרגים מחלקת גיוס. 
                כולל אסטרטגיה, תהליכים, טכנולוגיה ופיתוח הצוות.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  מה כולל הליווי:
                </h4>
                <ul className="space-y-2 text-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>בניית אסטרטגיית גיוס ארגונית</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>עיצוב תהליכים וזרימות עבודה אופטימליות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>בחירה והטמעת טכנולוגיות גיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>גיוס ופיתוח צוות הגיוס</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>מדידה, דיווח ושיפור מתמיד</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="xl">
              בואו נדבר על הקורס המתאים לכם
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
