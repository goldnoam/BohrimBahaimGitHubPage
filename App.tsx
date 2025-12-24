
import React from 'react';
import { ALCOHOL_DAMAGES, DRUG_DAMAGES, DRIVING_DANGERS, LEGAL_INFO, HELP_RESOURCES, ENFORCEMENT_TECH } from './constants';
import InfoCard from './components/InfoCard';
import AIChat from './components/AIChat';
import SpeakButton from './components/SpeakButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">ב</div>
            <h1 className="text-2xl font-bold text-indigo-900">בוחרים בחיים</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
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
        <section className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="flex justify-center mb-4">
              <SpeakButton text="העתיד שלך חשוב מכדי לבזבז אותו על רגע של טעות. המדריך המלא למניעת שימוש בסמים ואלכוהול." className="bg-indigo-800/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">העתיד שלך חשוב מכדי לבזבז אותו על רגע של טעות</h2>
            <p className="text-xl md:text-2xl text-indigo-100 mb-10 leading-relaxed">
              המדריך המלא למניעת שימוש בסמים ואלכוהול בקרב בני נוער ומבוגרים. ידע הוא כוח – בחרו בחיים, בחרו בעצמכם.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a href="#damages" className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">למד על הנזקים</a>
              <a href="#help" className="bg-white hover:bg-slate-100 text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg">צריך עזרה?</a>
            </div>
          </div>
        </section>

        {/* Damages Section */}
        <section id="damages" className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 relative">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 inline-flex items-center gap-4">
                נזקים בריאותיים וחברתיים
                <SpeakButton text="נזקים בריאותיים וחברתיים. אלכוהול גורם לפגיעה בכבד, נזק מוחי בקרב נוער וסיכונים חברתיים. סמים גורמים להתמכרות, מחלות נפש וקריסת מערכות." />
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-indigo-700 mb-8 flex items-center gap-2">
                <span>🍺</span> אלכוהול
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {ALCOHOL_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center gap-2">
                <span>💊</span> סמים
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {DRUG_DAMAGES.map((item, idx) => <InfoCard key={idx} item={item} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Driving Section */}
        <section id="driving" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-4">
                  סמים, אלכוהול ונהיגה - שילוב קטלני
                  <SpeakButton text="סמים, אלכוהול ונהיגה - שילוב קטלני. הכביש לא סולח. נהיגה תחת השפעה גורמת לזמן תגובה איטי, שיפוט לקוי של מרחקים וביטחון עצמי מופרז." />
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  הכביש לא סולח. נהיגה תחת השפעה היא לא רק עבירה על החוק, היא סכנת חיים ממשית לך, לנוסעים איתך ולכל מי שנמצא סביבך.
                </p>
                <div className="space-y-6">
                  {DRIVING_DANGERS.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="text-3xl">{item.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-800">{item.title}</h4>
                          <SpeakButton text={`${item.title}. ${item.description}`} />
                        </div>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800" 
                  alt="Road safety" 
                  className="rounded-2xl shadow-2xl object-cover h-96 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enforcement Tech Section */}
        <section id="enforcement" className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 inline-flex items-center gap-4">
                טכנולוגיות אכיפה: ינשוף ומהירות
                <SpeakButton text="טכנולוגיות אכיפה: ינשוף ומהירות. נלמד כיצד המשטרה בודקת נהיגה בשכרות באמצעות מכשיר הינשוף, כיצד בודקים סמים ברוק וכיצד מודדים מהירות באמצעות לייזר ורדאר." />
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
                משטרת ישראל משתמשת באמצעים טכנולוגיים מתקדמים כדי לאתר נהגים מסוכנים. היכרות עם האמצעים הללו עוזרת להבין את רצינות האכיפה.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ENFORCEMENT_TECH.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center text-center hover:scale-105 transition-transform group">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-indigo-900 mb-2">{item.title}</h3>
                  <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mb-4">{item.method}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  <SpeakButton text={`${item.title}. ${item.description}`} className="mt-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 inline-flex items-center gap-4">
                מה אומר החוק בישראל?
                <SpeakButton text="מה אומר החוק בישראל? מערכת המשפט מתייחסת בחומרה לעבירות סמים ונהיגה בשכרות. נהיגה בשכרות גוררת פסילה לשנתיים. החזקת סמים גוררת עד שלוש שנות מאסר." />
              </h2>
              <div className="w-24 h-1 bg-indigo-500 mx-auto"></div>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto">מערכת המשפט מתייחסת בחומרה רבה לעבירות סמים ונהיגה בשכרות. כתם פלילי יכול ללוות אתכם לכל החיים.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {LEGAL_INFO.map((item, idx) => (
                <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-indigo-400">{item.offense}</h3>
                    <SpeakButton text={`${item.offense}. עונש: ${item.punishment}. ${item.details}`} />
                  </div>
                  <div className="bg-red-900/30 text-red-200 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4 self-start">
                    עונש: {item.punishment}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section id="help" className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 bg-indigo-600 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <SpeakButton text="אתם לא לבד. אם אתם מרגישים שאתם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם." className="bg-indigo-700/50" />
                </div>
                <h2 className="text-3xl font-bold mb-6">אתם לא לבד.</h2>
                <p className="text-indigo-100 mb-8">
                  אם אתם מרגישים שאתם או מישהו קרוב אליכם מאבדים שליטה, יש למי לפנות. עזרה מקצועית ודיסקרטית זמינה עבורכם בכל רגע.
                </p>
                <div className="text-5xl opacity-20">☎️</div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 space-y-8">
                {HELP_RESOURCES.map((res, idx) => (
                  <div key={idx} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-slate-800 text-xl">{res.name}</h3>
                      <SpeakButton text={`${res.name}. ${res.description}. טלפון ${res.phone}`} />
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{res.description}</p>
                    <div className="flex items-center justify-between">
                      <a href={`tel:${res.phone}`} className="text-indigo-600 font-bold hover:underline">📞 {res.phone}</a>
                      <a href={res.website} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-indigo-600 transition-colors">לאתר הארגון ←</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">ב</div>
            <span className="text-white font-bold text-xl tracking-tight">בוחרים בחיים</span>
          </div>
          <p className="text-sm mb-6 max-w-lg mx-auto leading-relaxed">
            האתר נועד למטרות הסברה וחינוך בלבד. המידע אינו מהווה תחליף לייעוץ רפואי או משפטי מקצועי. במקרה חירום יש לפנות למוקד 100 או 101.
          </p>
          <div className="flex justify-center gap-6 text-xs uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white transition-colors">פרטיות</a>
            <a href="#" className="hover:text-white transition-colors">יצירת קשר</a>
          </div>
          <p className="mt-8 text-xs">© {new Date().getFullYear()} כל הזכויות שמורות - פרויקט הסברה קהילתי</p>
        </div>
      </footer>

      {/* Floating AI Chat */}
      <AIChat />
    </div>
  );
};

export default App;
