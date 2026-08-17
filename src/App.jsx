import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useData } from "./store/useData.js";
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu.jsx";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import SizeSheet from "./features/cart/SizeSheet.jsx";
import Cart from "./features/cart";
import CheckoutSheet from "./features/cart/CheckoutSheet.jsx";
import Favorites from "./features/favList/index.jsx";
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
      <Footer />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
