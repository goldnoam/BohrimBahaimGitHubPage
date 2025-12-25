import React, { useState, useEffect } from 'react';
import { ALCOHOL_DAMAGES, DRUG_DAMAGES, DRIVING_DANGERS, LEGAL_INFO, HELP_RESOURCES, ENFORCEMENT_TECH } from './constants';
import InfoCard from './components/InfoCard';
import FeedbackChat from './components/FeedbackChat';
import SpeakButton from './components/SpeakButton';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: "damages", label: "נזקים" },
    { href: "driving", label: "נהיגה בטוחה" },
    { href: "enforcement", label: "טכנולוגיות אכיפה" },
    { href: "legal", label: "החוק בישראל" },
    { href: "help", label: "קבלת עזרה" },
  ];

  const heroTitle = "העתיד שלך חשוב מכדי לבזבז אותו על רגע של טעות";
  const heroDescription = "המדריך המלא למניעת שימוש בסמים ואלכוהול בקרב בני נוער ומבוגרים. ידע הוא כוח – בחרו בחיים.";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      closeMobileMenu();
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-assistant">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-slate-100" role="banner">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-indigo-200 shadow-lg transform hover:rotate-6 transition-transform">ב</div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">בוחרים בחיים</h1>
          </div>
          
          <nav className="hidden md:flex gap-8 text-slate-600 font-semibold text-sm" aria-label="תפריט ראשי">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-indigo-600 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-md px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg bg-slate-100"
            aria-label={isMobileMenuOpen ? "סגור תפריט" : "פתח תפריט"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 animate-in slide-in-from-top-4 duration-300 shadow-2xl">
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-800 font-bold text-lg border-b border-slate-50 pb-3 active:text-indigo-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1" id="main-content">
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white py-20 md:py-32 px-4 overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-slate-950 to-indigo-950 opacity-90"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          {/* Animated Background blobs */}
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-indigo-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>

          <div className="container mx-auto text-center max-w-5xl relative z-10 animate-hero-slide-up">
            <div className="flex justify-center mb-8">
               <SpeakButton text={`${heroTitle}. ${heroDescription}`} className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </div>
            <h2 id="hero-heading" className="text-4xl md:text-7xl font-bold mb-8 leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white px-4">
              {heroTitle}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto font-light px-6">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 px-6">
              <a 
                href="#damages" 
                onClick={(e) => scrollToSection(e, "damages")}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-indigo-600/20 hover:-translate-y-1 active:scale-95 text-center"
              >
                למד על הנזקים
              </a>
              <a 
                href="#help" 
                onClick={(e) => scrollToSection(e, "help")}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95 text-center"
              >
                צריך עזרה?
              </a>
            </div>
          </div>
        </section>

        {/* Damages Section */}
        <section id="damages" className="py-24 bg-white" aria-labelledby="damages-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3 block">מידע חיוני</span>
              <h2 id="damages-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">נזקים בריאותיים וחברתיים</h2>
              <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-24">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-12 flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-indigo-50 rounded-xl">🍺</span> אלכוהול
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {ALCOHOL_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-12 flex items-center gap-4">
                  <span className="w-12 h-12 flex items-center justify-center bg-red-50 rounded-xl">💊</span> סמים
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {DRUG_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Driving Section */}
        <section id="driving" className="py-24 bg-slate-50 overflow-hidden" aria-labelledby="driving-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">בטיחות בדרכים</span>
                <h2 id="driving-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">אלכוהול ונהיגה - שילוב קטלני</h2>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed font-light">
                  הכביש לא סולח. נהיגה תחת השפעה היא לא רק עבירה על החוק, היא סכנת חיים ממשית לך ולסביבתך. כל שנייה קובעת.
                </p>
                <div className="space-y-8">
                  {DRIVING_DANGERS.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                      <div className="text-4xl bg-slate-50 p-4 rounded-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors shrink-0">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-slate-900 text-xl">{item.title}</h4>
                          <SpeakButton text={`${item.title}. ${item.description}`} className="w-9 h-9" />
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-10 bg-indigo-200/40 rounded-full blur-[100px] -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200" 
                  alt="נהיגה מסוכנת בלילה" 
                  className="rounded-[2.5rem] shadow-2xl object-cover aspect-square md:aspect-auto h-[400px] md:h-[600px] w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Section */}
        <section id="enforcement" className="py-24 bg-white" aria-labelledby="enforcement-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-3 block">אכיפה וביטחון</span>
              <h2 id="enforcement-heading" className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">טכנולוגיות אכיפה בשירות החוק</h2>
              <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {ENFORCEMENT_TECH.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex flex-col items-center text-center hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className="text-6xl mb-8 bg-white w-24 h-24 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <div className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">{item.method}</div>
                  <p className="text-slate-600 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-24 bg-slate-950 text-white relative overflow-hidden" aria-labelledby="legal-heading">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-900/10 blur-[150px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-3 block">היבטים משפטיים</span>
              <h2 id="legal-heading" className="text-3xl md:text-5xl font-bold mb-6 text-white">החוק בישראל והענישה</h2>
              <div className="w-24 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEGAL_INFO.map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 hover:border-indigo-500/50 transition-all shadow-xl group">
                  <h3 className="text-2xl font-bold mb-4 text-indigo-400">{item.offense}</h3>
                  <div className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl text-sm font-bold inline-block mb-6 border border-red-500/30">
                    עונש: {item.punishment}
                  </div>
                  <p className="text-slate-400 leading-relaxed font-light text-lg">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Resources */}
        <section id="help" className="py-24 bg-white" aria-labelledby="help-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto bg-slate-50 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
              <div className="md:w-1/3 p-12 bg-indigo-600 text-white flex flex-col justify-center text-right">
                <h2 id="help-heading" className="text-4xl md:text-5xl font-bold mb-8 leading-tight">אתם לא לבד.</h2>
                <p className="text-indigo-100 text-lg leading-relaxed mb-8 font-light">
                  אם אתם מרגישים שאתם או מישהו קרוב אליכם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם בכל רגע.
                </p>
                <div className="text-8xl opacity-10 font-black" aria-hidden="true">SOS</div>
              </div>
              <div className="md:w-2/3 p-8 md:p-16 space-y-12 bg-white">
                {HELP_RESOURCES.map((res, idx) => (
                  <div key={idx} className="group border-b border-slate-100 last:border-0 pb-12 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-bold text-slate-900 text-2xl group-hover:text-indigo-600 transition-colors">{res.name}</h3>
                        <SpeakButton text={`${res.name}. ${res.description}`} className="w-10 h-10" />
                      </div>
                      <p className="text-slate-500 text-lg font-light leading-relaxed">{res.description}</p>
                    </div>
                    <div className="flex flex-col gap-4 shrink-0">
                      <a 
                        href={`tel:${res.phone}`} 
                        className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-center flex items-center justify-center gap-2"
                      >
                        <span className="text-xl">📞</span>
                        {res.phone}
                      </a>
                      <a 
                        href={res.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-semibold text-slate-400 hover:text-indigo-600 transition-colors text-center"
                      >
                        לאתר הארגון ←
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-20 border-t border-white/5" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">ב</div>
              <span className="text-white font-bold text-2xl tracking-tight">בוחרים בחיים</span>
            </div>
            <nav className="flex gap-8 text-sm font-medium">
              {navLinks.map(link => (
                <a key={link.href} href={`#${link.href}`} className="hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="max-w-4xl mx-auto text-center border-t border-white/5 pt-12">
            <p className="text-sm mb-8 leading-relaxed font-light opacity-60">
              האתר נועד למטרות הסברה וחינוך בלבד. המידע אינו מהווה תחליף לייעוץ רפואי או משפטי מקצועי. במקרה חירום יש לפנות למוקד 100 או 101.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-600">
              <span>© {new Date().getFullYear()} Noam Gold.</span>
              <div className="flex gap-8">
                <a href="mailto:goldnoamai@gmail.com" className="hover:text-white transition-colors border-b border-transparent hover:border-white">שלחו משוב</a>
                <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
                <a href="#" className="hover:text-white transition-colors">פרטיות</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="חזור למעלה"
          className="fixed bottom-8 left-8 z-50 bg-white text-indigo-600 w-14 h-14 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110 active:scale-95 focus-visible:ring-4 focus-visible:ring-indigo-300 animate-in fade-in slide-in-from-bottom-4"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

     
    </div>
  );
};

export default App;
