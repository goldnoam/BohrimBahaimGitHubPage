
import React, { useState, useEffect } from 'react';
import { ALCOHOL_DAMAGES, DRUG_DAMAGES, DRIVING_DANGERS, LEGAL_INFO, HELP_RESOURCES, ENFORCEMENT_TECH } from './constants';
import InfoCard from './components/InfoCard';
import FeedbackChat from './components/FeedbackChat';
import AIChat from './components/AIChat';
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

  // Handle scroll to top visibility
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

  // Helper for smooth scrolling with header offset
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
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100" role="banner">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-indigo-200 shadow-lg">ב</div>
            <h1 className="text-xl md:text-2xl font-bold text-indigo-900 tracking-tight">בוחרים בחיים</h1>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-slate-600 font-semibold text-sm" aria-label="תפריט ראשי">
            {navLinks.map(link => (
              <a 
                key={link.href} 
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-indigo-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-md px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-slate-600 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
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

        {/* Mobile Nav Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col p-4 space-y-4">
              {navLinks.map(link => (
                <a 
                  key={link.href} 
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-slate-700 font-medium text-lg border-b border-slate-50 pb-2 active:text-indigo-600 focus-visible:outline-none focus-visible:bg-slate-50"
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
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden relative" aria-labelledby="hero-heading">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto text-center max-w-4xl relative z-10 animate-hero-slide-up">
            <div className="flex justify-center mb-4">
               <SpeakButton text={`${heroTitle}. ${heroDescription}`} className="bg-indigo-800/40 border-indigo-700/50 text-white hover:text-white" />
            </div>
            <h2 id="hero-heading" className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-md px-2">
              {heroTitle}
            </h2>
            <p className="text-lg md:text-2xl text-indigo-100 mb-8 md:mb-10 leading-relaxed font-light px-4">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
              <a 
                href="#damages" 
                onClick={(e) => scrollToSection(e, "damages")}
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 md:py-4 rounded-xl font-bold text-lg transition-all shadow-xl focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none active:scale-95"
              >
                למד על הנזקים
              </a>
              <a 
                href="#help" 
                onClick={(e) => scrollToSection(e, "help")}
                className="bg-white hover:bg-slate-100 text-indigo-900 px-8 py-3 md:py-4 rounded-xl font-bold text-lg transition-all shadow-xl focus-visible:ring-4 focus-visible:ring-slate-300 focus-visible:outline-none active:scale-95"
              >
                צריך עזרה?
              </a>
            </div>
          </div>
        </section>

        {/* Damages Section */}
        <section id="damages" className="py-12 md:py-24 bg-slate-50" aria-labelledby="damages-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 id="damages-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">נזקים בריאותיים וחברתיים</h2>
              <div className="w-16 md:w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="mb-16 md:mb-20">
              <h3 className="text-xl md:text-2xl font-bold text-indigo-700 mb-6 md:mb-10 flex items-center gap-2 border-r-4 border-indigo-700 pr-4">
                <span>🍺</span> אלכוהול
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {ALCOHOL_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-6 md:mb-10 flex items-center gap-2 border-r-4 border-red-600 pr-4">
                <span>💊</span> סמים
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {DRUG_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Driving Section */}
        <section id="driving" className="py-12 md:py-24 bg-white overflow-hidden" aria-labelledby="driving-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 id="driving-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 md:mb-8">סמים, אלכוהול ונהיגה - שילוב קטלני</h2>
                <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed font-light">
                  הכביש לא סולח. נהיגה תחת השפעה היא לא רק עבירה על החוק, היא סכנת חיים ממשית לך ולסביבתך.
                </p>
                <div className="space-y-6 md:space-y-8">
                  {DRIVING_DANGERS.map((item, idx) => (
                    <div key={idx} className="flex gap-4 md:gap-5 group items-start">
                      <div className="text-3xl md:text-4xl bg-slate-100 p-2 md:p-3 rounded-2xl group-hover:bg-indigo-50 transition-colors shrink-0">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                          <SpeakButton text={`${item.title}. ${item.description}`} className="w-8 h-8" />
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative w-full">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                  alt="כביש מהיר בלילה" 
                  className="rounded-3xl shadow-xl object-cover h-[300px] md:h-[500px] w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Section */}
        <section id="enforcement" className="py-12 md:py-24 bg-indigo-50" aria-labelledby="enforcement-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 id="enforcement-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">טכנולוגיות אכיפה: ינשוף ומהירות</h2>
              <div className="w-16 md:w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
              {ENFORCEMENT_TECH.map((item, idx) => (
                <div key={idx} className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-indigo-50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform relative group">
                  <div className="absolute top-4 left-4">
                    <SpeakButton text={`${item.title}. ${item.description}`} className="w-9 h-9" />
                  </div>
                  <div className="text-5xl md:text-6xl mb-6 md:mb-8 bg-indigo-50 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full shrink-0" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-indigo-950 mb-3">{item.title}</h3>
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold mb-4 md:mb-6 tracking-wide uppercase">{item.method}</div>
                  <p className="text-slate-600 text-sm leading-loose">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-12 md:py-24 bg-slate-950 text-white relative" aria-labelledby="legal-heading">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <h2 id="legal-heading" className="text-2xl md:text-3xl font-bold mb-4">מה אומר החוק בישראל?</h2>
              <div className="w-16 md:w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {LEGAL_INFO.map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-6 md:p-10 rounded-3xl border border-slate-800 hover:border-indigo-500 transition-all shadow-xl relative group">
                  <div className="absolute top-4 left-4">
                    <SpeakButton text={`${item.offense}. העונש המרבי הוא ${item.punishment}. ${item.details}`} className="bg-slate-800 border-slate-700 text-slate-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-indigo-400">{item.offense}</h3>
                  <div className="bg-red-500/20 text-red-400 px-3 md:px-4 py-1 rounded-full text-[10px] md:text-xs font-bold inline-block mb-4 md:mb-6">
                    עונש: {item.punishment}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Resources */}
        <section id="help" className="py-12 md:py-24 bg-white" aria-labelledby="help-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
              <div className="md:w-5/12 p-8 md:p-12 bg-indigo-700 text-white flex flex-col justify-center relative">
                <h2 id="help-heading" className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 leading-tight">אתם לא לבד.</h2>
                <p className="text-indigo-100 text-base md:text-lg leading-relaxed mb-6 md:mb-10 font-light">
                  אם אתם מרגישים שאתם או מישהו קרוב אליכם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם.
                </p>
                <div className="hidden md:block text-6xl opacity-10 font-bold self-end" aria-hidden="true">HELP</div>
              </div>
              <div className="md:w-7/12 p-6 md:p-16 space-y-8 md:space-y-10">
                {HELP_RESOURCES.map((res, idx) => (
                  <div key={idx} className="group border-b border-slate-200 last:border-0 pb-6 md:pb-8 last:pb-0 relative">
                    <div className="flex items-center gap-2 mb-2">
                       <h3 className="font-bold text-slate-900 text-xl md:text-2xl group-hover:text-indigo-600 transition-colors">{res.name}</h3>
                       <SpeakButton text={`${res.name}. ${res.description}. מספר הטלפון הוא ${res.phone}`} className="w-8 h-8" />
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mb-4 font-light leading-relaxed">{res.description}</p>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <a 
                        href={`tel:${res.phone}`} 
                        aria-label={`התקשר ל${res.name} בטלפון ${res.phone}`}
                        className="bg-indigo-50 text-indigo-700 px-5 md:px-6 py-2 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none active:scale-95 text-sm md:text-base"
                      >
                        📞 {res.phone}
                      </a>
                      <a 
                        href={res.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`בקר באתר האינטרנט של ${res.name}`}
                        className="text-xs md:text-sm font-semibold text-slate-400 hover:text-indigo-600 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none rounded-sm"
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
      <footer className="bg-slate-950 text-slate-500 py-12 md:py-16 border-t border-slate-900" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6 md:mb-8">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl">ב</div>
            <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">בוחרים בחיים</span>
          </div>
          <p className="text-xs md:text-sm mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed font-light px-4">
            האתר נועד למטרות הסברה וחינוך בלבד. המידע אינו מהווה תחליף לייעוץ רפואי או משפטי מקצועי. במקרה חירום יש לפנות למוקד 100 או 101.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-8 md:mb-10">
            <span>© Noam Gold 2025.</span>
            <div className="flex gap-4 md:gap-8">
              <a href="mailto:goldnoamai@gmail.com" className="text-indigo-400 hover:text-white transition-colors underline decoration-indigo-400/30 underline-offset-4 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:outline-none rounded-sm">שלחו משוב למייל</a>
              <a href="#" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none rounded-sm">תנאי שימוש</a>
              <a href="#" className="hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none rounded-sm">פרטיות</a>
            </div>
          </div>
          <p className="text-[10px] opacity-30">All Rights Reserved. Safety First.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="חזור למעלה"
          className="fixed bottom-24 left-4 md:bottom-28 md:left-6 z-50 bg-white text-indigo-600 w-12 h-12 rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110 active:scale-90 focus-visible:ring-4 focus-visible:ring-indigo-300 focus-visible:outline-none animate-in fade-in slide-in-from-bottom-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Floating Feedback Component */}
      <FeedbackChat />
      
      {/* Floating AI Consultation Component */}
      <AIChat />
    </div>
  );
};

export default App;
