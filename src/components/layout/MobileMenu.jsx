import { useStore } from "../../store/useStore";
import FadeAnimation from "../ui/FadeAnimation";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";

const MobileMenu = () => {
  const { openSizeSheet, isMenuOpen, closeMenu, toggleFav, favItems } =
    useStore();

  if (!isMenuOpen) return null;

  const NAV_LINKS = [
    { href: "/#heritage", label: "إرثنا" },
    { href: "/menu", label: "المنيو" },
    { href: "/#signature", label: "طبقنا المميز" },
    { href: "/#contact", label: "تواصل معنا" },
  ];

  return (
    <>
      <div className="overlay show" id="overlay" onClick={closeMenu}></div>

      <FadeAnimation
        initial={{ opacity: 0, x: -34 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="drawer drawer-left"
        id="navDrawer"
      >
        <div className="drawer-head">
          <span>القائمة</span>
          <Button className="drawer-close" onClick={closeMenu}>
            ×
          </Button>
        </div>

        <div className="drawer-body">
          <nav className="drawer-links">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={closeMenu}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="drawer-divider"></div>

          <h4 className="drawer-subtitle">المفضلة</h4>

          <div id="favList">
            {favItems.length > 0 ? (
              favItems.map((item) => (
                <div key={item.id} className="cart-row">
                  <div className="row-info flex flex-col">
                    <span className="row-name">{item.name}</span>
                    <span className="row-price-sm">
                      {item.prices?.[0]?.price || item.price} ج.م
                    </span>
                  </div>

                  <div className="row-actions-sm flex items-center gap-2">
                    <Button
                      className="icon-sm cart-btn"
                      aria-label="أضف للسلة"
                      onClick={() => openSizeSheet(item)}
                    >
                      <ShoppingCart size={16} />
                    </Button>

                    <Button
                      className="row-remove"
                      aria-label="حذف من المفضلة"
                      onClick={() => toggleFav(item)}
                    >
                      ×
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <p className="py-4 text-center text-sm text-gray-400">
                لا توجد عناصر في المفضلة بعد.
              </p>
            )}
          </div>

          <div className="drawer-divider mt-5"></div>

          <h4 className="drawer-subtitle">تابعونا</h4>
          <div className="social justify-start">
            <a
              href="https://www.facebook.com/abusaudsweets"
              aria-label="فيسبوك"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/abusaudsweets/"
              aria-label="إنستغرام"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default MobileMenu;
