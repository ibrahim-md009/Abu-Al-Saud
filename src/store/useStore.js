import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      cartItems: [],

      selectedProduct: null,
      isMenuOpen: false,
      isCartOpen: false,
      isSizeSheetOpen: false,
      isCheckoutSheetOpen: false,

      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      closeMenu: () => set({ isMenuOpen: false }),
      openMenu: () => set({ isMenuOpen: true }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
      resetCart: () => set({ cartItems: [] }),

      openCheckoutSheet: () => set({ isCheckoutSheetOpen: true }),
      closeCheckoutSheet: () => set({ isCheckoutSheetOpen: false }),

      openSizeSheet: (product) =>
        set({ isSizeSheetOpen: true, selectedProduct: product }),
      closeSizeSheet: () => set({ isSizeSheetOpen: false }),

      addToCart: (product, size) =>
        set((state) => {
          const isExisted = state.cartItems.find((item) => {
            return product.id === item.id && item.size === size?.name;
          });

          if (isExisted) {
            return {
              cartItems: state.cartItems.map((item) => {
                return item.id === product.id && item.size === size?.name
                  ? { ...item, quantity: item.quantity + 1 }
                  : item;
              }),
            };
          }

          return {
            cartItems: [
              ...state.cartItems,
              { ...product, size: size?.name, price: size?.price, quantity: 1 },
            ],
          };
        }),

      updateQuantity: (product, step) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) =>
              item.id === product.id && item.size === product.size
                ? { ...product, quantity: product.quantity + step }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      delProduct: (product) =>
        set((state) => ({
          cartItems: state.cartItems.filter(
            (item) => item.id !== product.id || item.size !== product.size,
          ),
        })),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cartItems: state.cartItems }),
    },
  ),
);
