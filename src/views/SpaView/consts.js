import { pool } from "../../utils/icons";
import Spa from "./Spa";
import MySpa from "./MySpa";

export const metadata = {
  title: "ספא",
  icon: pool
};

export const treatmentNames = [
  "מסאז' שבדי",
  "עיסוי לנשים בהריון",
  "עיסוי פנים וראש",
  "עיסוי של הרקמות העמוקות",
  "מסאז' באמצעות אבנים חמות",
  "עיסוי ארומתרפי",
  "עיסוי תאילנדי"
];

export const treatmentDesc = {
  "מסאז' שבדי": "מסאז' זה נעשה באמצעות שמנים שונים ועוזר להפיג את מתחי היומיום, לשפר את הזרימה של הדם ולעזור בכל תהליך חילוף החומרים בגוף.",
  "עיסוי לנשים בהריון": "מסאז' זה נעשה בדרך כלל לנשים הנמצאות בסוף החודש הרביעי להריון שלהם. עיסוי זה משלב שמנים ומטרתו לעזור לאישה בכל הקשור ללחצים וכאבים בזמן ההריון.",
  "עיסוי פנים וראש": "טיפול ספא המערב עיסוי של האוזניים, הלסת, צוואר, ראש וארובת העין. תוצאותיו של טיפול זה הוא לרוב שחרור של מתחים וריענון של עור הפנים.",
  "עיסוי של הרקמות העמוקות": "מסאז' איטי המתמקד באיזורים ספציפיים של הגוף. עיסוי זה מפעיל לחץ מתון על השרירים ומערכת השלד ומתמקד ברובד של השרירים העמוקים של הגוף.",
  "מסאז' באמצעות אבנים חמות": "טיפול הנעשה באמצעות אבנים המחוממות לטמפרטורה של חמישים מעלות. המטפל שם את האבנים על סדין המונח על גופו של המטופל ומתחיל לעסות את הגוף שלו באמצעותם. פעולה זו גורמת לשחרור של השרירים והפגה של מתחים.",
  "עיסוי ארומתרפי": "עיסוי ארומתרפי הינו טיפול במגע הכולל מספר טכניקות שונות שמטרתן לשפר מצב הבריאות, לרפאות את המחלות  ולהחזיר הרמוניה לגוף ולנפש.  העיסוי ארומתרפי משפר את זרימת הדם והחמצן אל התאים, ועוזר לפינוי פסולת מתוך השריר.",
  "עיסוי תאילנדי": "העיסוי התאילנדי הוא תהליך של מגע אנושי הכולל עיסויים ולחיצות איטיות באזורי רקמות רכות, גידים ושרירים, המבוצעים באמצעות מפרקי המעסה, מתיחות לגמישות הגוף ותרגילים מגוונים להמרצה ואיזון של מחזור הדם. המתיחות והתרגילים כוללים שילובי מגע כוחניים בין רגליו וידיו של המעסה כלפי המטופל."
}
  ;

export const pageLinks = [
  {
    title: "הזמנת טיפול",
    component: Spa,
    path: "/spa/treatments"
  },
  {
    title: "הטיפולים שלי",
    component: MySpa,
    path: "/spa/mytreatments"
  }
];
