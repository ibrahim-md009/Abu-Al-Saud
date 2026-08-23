import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useData } from "./store/useData.js";
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu.jsx";
import Home from "./pages/home";

const Menu = lazy(() => import("./pages/Menu.jsx"));
const SizeSheet = lazy(() => import("./features/cart/SizeSheet.jsx"));
const Cart = lazy(() => import("./features/cart"));
const CheckoutSheet = lazy(() => import("./features/cart/CheckoutSheet.jsx"));
const Favorites = lazy(() => import("./features/favList/index.jsx"));

import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const initListeners = useData((state) => state.initListeners);

  useEffect(() => {
    const unsubscribe = initListeners();
    return () => unsubscribe();
  }, [initListeners]);

  return (
    <>
      <Suspense fallback={null}>
        <Preloader />

        <Header />

        <MobileMenu />

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>

        <Cart />
        <Favorites />
        <SizeSheet />
        <CheckoutSheet />
      </Suspense>

      <Footer />

      <Toaster position="top-center" />
    </>
  );
};

export default App;
