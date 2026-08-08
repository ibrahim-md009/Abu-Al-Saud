import { useEffect } from "react";
import { useData } from "./store/useData.js";
import Header from "./components/layout/Header";
import Preloader from "./components/layout/Preloader";
import Menu from "./pages/Menu";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./features/cart";
import SizeSheet from "./features/cart/SizeSheet.jsx";
import CheckoutSheet from "./features/cart/CheckoutSheet.jsx";
import MobileMenu from "./components/layout/MobileMenu.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  const initListeners = useData((state) => state.initListeners);

  useEffect(() => {
    const unsubscribe = initListeners();
    return () => unsubscribe();
  }, [initListeners]);

  return (
    <>
      <Preloader />
      <Header />
      <MobileMenu />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Cart />
      <SizeSheet />
      <CheckoutSheet />
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
