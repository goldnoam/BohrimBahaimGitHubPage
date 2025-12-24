
import React from 'react';
import { DamageInfo, LegalInfo, ResourceLink, EnforcementInfo } from './types';

export const ALCOHOL_DAMAGES: DamageInfo[] = [
  {
    title: "פגיעה בכבד",
    description: "צריכה ממושכת מובילה לשחמת הכבד, דלקות כבד קשות ופגיעה בלתי הפיכה בסינון רעלים מהגוף.",
    icon: "🩺",
    category: 'alcohol'
  },
  {
    title: "נזק מוחי בקרב נוער",
    description: "בגיל ההתבגרות המוח עדיין מתפתח. אלכוהול פוגע בזיכרון, ביכולת הלמידה ובקבלת ההחלטות.",
    icon: "🧠",
    category: 'alcohol'
  },
  {
    title: "סיכונים חברתיים",
    description: "איבוד שליטה עצמית שמוביל לאלימות, יחסי מין לא מוגנים והידרדרות בלימודים או בעבודה.",
    icon: "🤝",
    category: 'alcohol'
  }
];

export const DRUG_DAMAGES: DamageInfo[] = [
  {
    title: "התמכרות פסיכולוגית ופיזית",
    description: "שינוי הכימיה במוח שגורם לתלות מוחלטת בחומר, עד לאובדן זהות אישית.",
    icon: "🔗",
    category: 'drugs'
  },
  {
    title: "מחלות נפש",
    description: "שימוש בסמים עלול להוות טריגר להתקפים פסיכוטיים, חרדה קשה, דיכאון וסכיזופרניה.",
    icon: "🌀",
    category: 'drugs'
  },
  {
    title: "קריסת מערכות",
    description: "פגיעה בלב, בריאות ובכלי הדם, וסכנת מוות מיידית כתוצאה ממנת יתר.",
    icon: "💔",
    category: 'drugs'
  }
];

export const DRIVING_DANGERS: DamageInfo[] = [
  {
    title: "זמן תגובה איטי",
    description: "אלכוהול וסמים מעכבים את העברת המידע מהעיניים למוח ומהמוח לשרירים.",
    icon: "⏱️",
    category: 'driving'
  },
  {
    title: "שיפוט לקוי של מרחקים",
    description: "הנהג אינו מעריך נכון את המרחק מרכב אחר או את מהירות הנסיעה.",
    icon: "📏",
    category: 'driving'
  },
  {
    title: "ביטחון עצמי מופרז",
    description: "נטילת סיכונים מיותרים בכביש שמובילה לתאונות קטלניות.",
    icon: "🚩",
    category: 'driving'
  }
];

export const ENFORCEMENT_TECH: EnforcementInfo[] = [
  {
    title: "מכשיר הינשוף (Breathalyzer)",
    method: "בדיקת אוויר נשוף",
    description: "מכשיר אלקטרוני המודד את ריכוז האלכוהול בליטר אוויר נשוף. החוק קובע רמות מקסימליות (290 מיקרוגרם לנהג רגיל, ורף נמוך בהרבה של 50 מיקרוגרם לנהגים צעירים ומקצועיים). סירוב לבדיקה נחשב בחוק כהודאה בנהיגה בשכרות.",
    icon: "🌬️"
  },
  {
    title: "בדיקת סמים (רוק ודם)",
    method: "בדיקת מעבדה/שטח",
    description: "בניגוד לאלכוהול, בנהיגה תחת השפעת סמים אין 'רף מותר'. הימצאות שרידי סם בדם או ברוק מהווה עבירה פלילית חמורה. המשטרה משתמשת בערכות בדיקת רוק מהירות בשטח ובבדיקות דם במקרים של חשד סביר.",
    icon: "🧪"
  },
  {
    title: "מדידת מהירות (ממל\"ז ודבורה)",
    method: "לייזר ורדאר",
    description: "המשטרה משתמשת במד-מהירות לייזר (ממל\"ז) הפועל על קרן לייזר הנשלחת לרכב, וביחידת 'דבורה' המבוססת על רדאר ומאפשרת מדידה תוך כדי נסיעה. בנוסף, פרוסות מצלמות א'3 (מצלמות כתומות) בכבישים בין-עירוניים המצלמות רכבים העוברים את המהירות המותרת.",
    icon: "📡"
  }
];

export const LEGAL_INFO: LegalInfo[] = [
  {
    offense: "נהיגה בשכרות",
    punishment: "פסילת רישיון ל-2 שנים לפחות",
    details: "במקרים חמורים או חוזרים ייתכן מאסר בפועל והחרמת הרכב."
  },
  {
    offense: "החזקת סמים לצריכה עצמית",
    punishment: "עד 3 שנות מאסר",
    details: "קנסות כבדים ורישום פלילי שפוגע בעתיד המקצועי."
  },
  {
    offense: "נהיגה תחת השפעת סמים",
    punishment: "פסילה ממושכת וסיכון למאסר",
    details: "החוק רואה בנהיגה תחת סמים עבירה חמורה אף יותר מאלכוהול לעיתים."
  }
];

export const HELP_RESOURCES: ResourceLink[] = [
  {
    name: "ער\"ן (עזרה ראשונה נפשית)",
    description: "סיוע נפשי בטלפון ובאינטרנט 24/7.",
    phone: "1201",
    website: "https://www.eran.org.il"
  },
  {
    name: "עמותת אל-סם",
    description: "ייעוץ וטיפול לבני נוער וצעירים המתמודדים עם סמים ואלכוהול.",
    phone: "1-700-50-50-55",
    website: "https://www.alsam.org.il"
  },
  {
    name: "הרשות הלאומית לביטחון קהילתי",
    description: "מרכזי גמילה ומידע מקצועי למניעה.",
    phone: "110",
    website: "https://www.gov.il/he/departments/israel_national_authority_for_community_safety"
  }
];
