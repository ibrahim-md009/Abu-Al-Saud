import { create } from "zustand";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

export const useData = create((set) => ({
  products: [],
  mainCategories: [],
  subCategories: [],
  loading: true,

  initListeners: () => {
    const unsubProducts = onSnapshot(collection(db, "products"), (snap) => {
      set({ products: snap.docs.map((d) => ({ id: d.id, ...d.data() })) });
    });

    const unsubMain = onSnapshot(collection(db, "mainCategories"), (snap) => {
      set({
        mainCategories: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
      });
    });

    const unsubSub = onSnapshot(collection(db, "subCategories"), (snap) => {
      set({
        subCategories: snap.docs.map((d) => ({ id: d.id, ...d.data() })),
        loading: false,
      });
    });

    return () => {
      unsubProducts();
      unsubMain();
      unsubSub();
    };
  },
}));
