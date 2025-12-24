
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `אתה יועץ חינוכי מומחה מטעם אתר "בוחרים בחיים".
תפקידך לספק מידע מדויק, תומך ומרתיע לגבי שימוש בסמים ואלכוהול.
התמקד בנזקים בריאותיים, השלכות חברתיות והיבטים משפטיים בישראל.
ענה תמיד בעברית רהוטה ומכבדת. 
אם שואלים אותך על עזרה, הפנה תמיד לגורמים רשמיים כמו ער"ן (1201) או אל-סם.
אל תעודד שימוש בשום צורה, גם לא "שימוש אחראי". המסר הוא הימנעות.`;

/**
 * Gets a response from the Gemini AI model.
 * Adheres strictly to @google/genai SDK guidelines.
 */
export async function getGeminiResponse(userPrompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
  // Always initialize GoogleGenAI with the apiKey named parameter using process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access the .text property directly as it is a getter, not a method.
    return response.text || "מצטער, חלה שגיאה בעיבוד הבקשה. אנא נסה שוב מאוחר יותר.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "חלה שגיאה בתקשורת עם הבינה המלאכותית. אנא וודא שיש לך חיבור אינטרנט תקין.";
  }
}
