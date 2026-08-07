import Header from "./components/layout/Header";
import Preloader from "./components/layout/Preloader";
import Menu from "./pages/Menu";
import Footer from "./components/layout/Footer";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";
import Cart from "./components/layout/cart";
import SizeSheet from "./components/layout/cart/SizeSheet.jsx";
import CheckoutSheet from "./components/layout/cart/CheckoutSheet.jsx";
import MobileMenu from "./components/layout/MobileMenu.jsx";

const App = () => {
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
    </>
  );
};

export default App;
