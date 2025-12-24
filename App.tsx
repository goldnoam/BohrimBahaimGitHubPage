
import React from 'react';
import { ALCOHOL_DAMAGES, DRUG_DAMAGES, DRIVING_DANGERS, LEGAL_INFO, HELP_RESOURCES, ENFORCEMENT_TECH } from './constants';
import InfoCard from './components/InfoCard';
import FeedbackChat from './components/FeedbackChat';
import AIChat from './components/AIChat';
import SpeakButton from './components/SpeakButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-indigo-200 shadow-lg">ב</div>
            <h1 className="text-2xl font-bold text-indigo-900 tracking-tight">בוחרים בחיים</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-600 font-semibold text-sm">
            <a href="#damages" className="hover:text-indigo-600 transition-colors">נזקים</a>
            <a href="#driving" className="hover:text-indigo-600 transition-colors">נהיגה בטוחה</a>
            <a href="#enforcement" className="hover:text-indigo-600 transition-colors">טכנולוגיות אכיפה</a>
            <a href="#legal" className="hover:text-indigo-600 transition-colors">החוק בישראל</a>
            <a href="#help" className="hover:text-indigo-600 transition-colors">קבלת עזרה</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-slate-900 text-white py-24 px-4 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto text-center max-w-4xl relative z-10">
            <div className="flex justify-center mb-6">
              <SpeakButton text="העתיד שלך חשוב מכדי לבזבז אותו על רגע של טעות. המדריך המלא למניעת שימוש בסמים ואלכוהול בקרב בני נוער ומבוגרים. ידע הוא כוח – בחרו בחיים." className="bg-indigo-800/50 text-white hover:text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">העתיד שלך חשוב מכדי לבזבז אותו על רגע של טעות</h2>
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed font-light">
              המדריך המלא למניעת שימוש בסמים ואלכוהול בקרב בני נוער ומבוגרים. ידע הוא כוח – בחרו בחיים.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="#damages" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1">למד על הנזקים</a>
              <a href="#help" className="bg-white hover:bg-slate-100 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1">צריך עזרה?</a>
            </div>
          </div>
        </section>

        {/* Damages Section */}
        <section id="damages" className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-2">
                <h2 className="text-3xl font-bold text-slate-900">נזקים בריאותיים וחברתיים</h2>
                <SpeakButton text="נזקים בריאותיים וחברתיים. כאן תוכלו ללמוד על ההשלכות החמורות של שימוש באלכוהול ובסמים על הגוף והנפש." />
              </div>
              <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="mb-20">
              <h3 className="text-2xl font-bold text-indigo-700 mb-10 flex items-center gap-2 border-r-4 border-indigo-700 pr-4">
                <span>🍺</span> אלכוהול
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ALCOHOL_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-10 flex items-center gap-2 border-r-4 border-red-600 pr-4">
                <span>💊</span> סמים
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DRUG_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Driving Section */}
        <section id="driving" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">סמים, אלכוהול ונהיגה - שילוב קטלני</h2>
                  <SpeakButton text="סמים, אלכוהול ונהיגה - שילוב קטלני. הכביש לא סולח. נהיגה תחת השפעה היא לא רק עבירה על החוק, היא סכנת חיים ממשית לך ולסביבתך." />
                </div>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                  הכביש לא סולח. נהיגה תחת השפעה היא לא רק עבירה על החוק, היא סכנת חיים ממשית לך ולסביבתך.
                </p>
                <div className="space-y-8">
                  {DRIVING_DANGERS.map((item, idx) => (
                    <div key={idx} className="flex gap-5 group items-start">
                      <div className="text-4xl bg-slate-100 p-3 rounded-2xl group-hover:bg-indigo-50 transition-colors">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                          <SpeakButton text={`${item.title}. ${item.description}`} />
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                  alt="Road safety" 
                  className="rounded-3xl shadow-2xl object-cover h-[500px] w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Section */}
        <section id="enforcement" className="py-24 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-slate-900">טכנולוגיות אכיפה: ינשוף ומהירות</h2>
                <SpeakButton text="טכנולוגיות אכיפה: ינשוף ומהירות. גלו כיצד המשטרה אוכפת את החוק ושומרת על בטיחות בדרכים." />
              </div>
              <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {ENFORCEMENT_TECH.map((item, idx) => (
                <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl border border-indigo-50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform relative group">
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <SpeakButton text={`${item.title}. ${item.description}`} />
                  </div>
                  <div className="text-6xl mb-8 bg-indigo-50 w-24 h-24 flex items-center justify-center rounded-full">{item.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-950 mb-3">{item.title}</h3>
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">{item.method}</div>
                  <p className="text-slate-600 text-sm leading-loose">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-24 bg-slate-950 text-white relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <h2 className="text-3xl font-bold">מה אומר החוק בישראל?</h2>
                <SpeakButton text="מה אומר החוק בישראל? כאן מפורטים העונשים הקבועים בחוק על עבירות נהיגה בשכרות והחזקת סמים." className="text-indigo-400 hover:text-white" />
              </div>
              <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEGAL_INFO.map((item, idx) => (
                <div key={idx} className="bg-slate-900 p-10 rounded-3xl border border-slate-800 hover:border-indigo-500 transition-all shadow-2xl relative group">
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <SpeakButton text={`${item.offense}. העונש המרבי הוא ${item.punishment}. ${item.details}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-indigo-400">{item.offense}</h3>
                  <div className="bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-xs font-bold inline-block mb-6">
                    עונש: {item.punishment}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Resources */}
        <section id="help" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-slate-50 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200">
              <div className="md:w-5/12 p-12 bg-indigo-700 text-white flex flex-col justify-center relative">
                <div className="absolute top-4 left-4">
                  <SpeakButton text="אתם לא לבד. אם אתם מרגישים שאתם או מישהו קרוב אליכם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם." className="bg-white/10 text-white hover:text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-8 leading-tight">אתם לא לבד.</h2>
                <p className="text-indigo-100 text-lg leading-relaxed mb-10 font-light">
                  אם אתם מרגישים שאתם או מישהו קרוב אליכם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם.
                </p>
                <div className="text-6xl opacity-10 font-bold self-end">HELP</div>
              </div>
              <div className="md:w-7/12 p-8 md:p-16 space-y-10">
                {HELP_RESOURCES.map((res, idx) => (
                  <div key={idx} className="group border-b border-slate-200 last:border-0 pb-8 last:pb-0 relative">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-bold text-slate-900 text-2xl group-hover:text-indigo-600 transition-colors">{res.name}</h3>
                      <SpeakButton text={`${res.name}. ${res.description}. טלפון: ${res.phone}`} />
                    </div>
                    <p className="text-slate-500 text-base mb-4 font-light leading-relaxed">{res.description}</p>
                    <div className="flex items-center justify-between">
                      <a href={`tel:${res.phone}`} className="bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                        📞 {res.phone}
                      </a>
                      <a href={res.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-400 hover:text-indigo-600 transition-colors">לאתר הארגון ←</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">ב</div>
            <span className="text-white font-bold text-2xl tracking-tighter">בוחרים בחיים</span>
          </div>
          <p className="text-sm mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            האתר נועד למטרות הסברה וחינוך בלבד. המידע אינו מהווה תחליף לייעוץ רפואי או משפטי מקצועי. במקרה חירום יש לפנות למוקד 100 או 101.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs font-semibold tracking-widest uppercase mb-10">
            <span>© Noam Gold AI 2025.</span>
            <div className="flex gap-8">
              <a href="mailto:noamgoldai@gmail.com" className="text-indigo-400 hover:text-white transition-colors underline decoration-indigo-400/30 underline-offset-4">שלחו משוב למייל</a>
              <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-white transition-colors">פרטיות</a>
            </div>
          </div>
          <p className="text-[10px] opacity-30">All Rights Reserved. Safety First.</p>
        </div>
      </footer>

      {/* Floating Interactive Components */}
      <FeedbackChat />
      <AIChat />
    </div>
  );
};

export default App;
