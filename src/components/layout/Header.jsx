import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import FavList from "../../features/favList";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";
import FadeAnimation from "../ui/FadeAnimation";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Heart } from "lucide-react";

const Header = () => {
  const { openCart, toggleMenu, isCartOpen } = useStore();

  const count = useStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0),
  );

  const [isFavOpen, setIsFavOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { href: "/", label: "الرئيسية" },
    { href: "/#heritage", label: "إرثنا" },
    { href: "/#signature", label: "طبقنا المميز" },
    { href: "/#menu", label: "الأكثر مبيعا" },
    { href: "/#contact", label: "تواصل معنا" },
    { href: "/menu", label: "المنيو" },
  ];

  return (
    <header id="siteHeader" className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner container">
        <div className="brand">
          <Link to="/">
            <img className="brand-logo" src={logo} alt="أبو السعود" />
          </Link>
          <span className="brand-est">EST. 1896</span>
        </div>

        <nav className="links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Button
            className={`icon-btn ${isCartOpen ? "active" : ""}`}
            id="cartBtn"
            aria-label="سلة الطلبات"
            onClick={openCart}
          >
            <ShoppingCart />
            {count > 0 && (
              <span className="badge" id="cartBadge">
                {count}
              </span>
            )}
          </Button>
          <>
            <Button
              className={`icon-sm fav-btn fav-list`}
              aria-label="أضف للمفضلة"
              onClick={() => setIsFavOpen(true)}
            >
              <Heart />
            </Button>

            {isFavOpen && (
              <FadeAnimation
                initial={{ opacity: 0, x: -34 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                // className="fixed top-0 left-0 z-50 h-full w-80 bg-white p-4 shadow-xl"
                className="drawer drawer-left p-3"
              >
                <button onClick={() => setIsFavOpen(false)}>×</button>
                <FavList />
              </FadeAnimation>
            )}
          </>

          <Button
            className="menu-toggle"
            id="menuToggle"
            aria-label="القائمة"
            onClick={() => toggleMenu()}
          >
            <Menu className="text-[#b8862f]" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
