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
  ArrowLeft
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

      {/* Courses Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">קורסים והדרכות</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              תכניות מקצועיות המשלבות ידע תיאורטי עם כלים מעשיים לשיפור מיידי
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
                <ul className="space-y-2 text-foreground">
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
                  <h3 className="text-2xl font-bold mb-2">סדנת ראיונות מתקדמת למנהלים</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      יום אינטנסיבי
                    </span>
                    <span>8 שעות</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                סדנה מעשית למנהלים מגייסים שרוצים לשפר את איכות החלטות הגיוס שלהם. 
                דגש על זיהוי כישורים, הערכת התאמה תרבותית ומניעת הטיות.
              </p>

              <div className="border-t pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  מה לומדים בסדנה:
                </h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>טכניקות שאילה מתקדמות לזיהוי כישורים</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>זיהוי ומניעת הטיות בתהליך קבלת החלטות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>הערכת התאמה תרבותית וערכית</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>תרגול מעשי עם משוב מיידי</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>בניית מערך ראיונות אופטימלי</span>
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
                      4 מפגשים
                    </span>
                    <span>8 שעות</span>
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
                <ul className="space-y-2 text-foreground">
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
                      ליווי אישי
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
                <ul className="space-y-2 text-foreground">
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
              בואו נדבר על התכנית המתאימה לכם
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
