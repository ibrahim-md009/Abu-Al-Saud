import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      cartItems: [],
      favItems: [],

      selectedProduct: null,
      isMenuOpen: false,
      isCartOpen: false,
      isFavListOpen: false,
      isSizeSheetOpen: false,
      isCheckoutSheetOpen: false,

      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
      closeMenu: () => set({ isMenuOpen: false }),
      openMenu: () => set({ isMenuOpen: true }),

      openFavList: () => set({ isFavListOpen: true }),
      closeFavList: () => set({ isFavListOpen: false }),

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

      toggleFav: (product) =>
        set((state) => {
          const isExisted = state.favItems.some(
            (item) => item.id === product.id,
          );

          if (isExisted) {
            return {
              favItems: state.favItems.filter((item) => item.id !== product.id),
            };
          }

          return {
            favItems: [...state.favItems, product],
          };
        }),

      clearFav: () => set({ favItems: [] }),
    }),

    {
      name: "cart-storage",
      partialize: (state) => ({
        cartItems: state.cartItems,
        favItems: state.favItems,
      }),
    },
  ),
);
