import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// الأكواد السرية الخاصة بمشروعك (هتلاقيها في ملف التوثيق أو لوحة تحكم الفايربيز)
const firebaseConfig = {
  apiKey: "AIzaSyDzpSdvs6_9NVgTU0kNn0-NnEdQ13P9JEY",
  authDomain: "abu-al-saud.firebaseapp.com",
  projectId: "abu-al-saud",
  storageBucket: "abu-al-saud.firebasestorage.app",
  messagingSenderId: "229266229940",
  appId: "1:229266229940:web:50b3e590d7f6df1046e5e1",
};

// تهيئة الفايربيز
const app = initializeApp(firebaseConfig);

// تصدير الداتابيز عشان نستخدمها في باقي المشايع
export const db = getFirestore(app);
