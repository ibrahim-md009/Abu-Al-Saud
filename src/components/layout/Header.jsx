import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, Heart } from "lucide-react";

const Header = () => {
  const { openCart, toggleMenu, isCartOpen } = useStore();

  const count = useStore((state) =>
    state.cartItems.reduce((total, item) => total + item.quantity, 0),
  );

  const { openFavList, isFavListOpen } = useStore();

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
          <Button
            className={`icon-btn fav-btn fav-list ${isFavListOpen ? "active" : ""}`}
            aria-label="أضف للمفضلة"
            onClick={openFavList}
          >
            <Heart />
          </Button>

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
