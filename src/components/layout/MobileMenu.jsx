import { useStore } from "../../store/useStore";
import FadeAnimation from "../ui/FadeAnimation";
import { Link } from "react-router-dom";

import Button from "../ui/Button";
const MobileMenu = () => {
  const { isMenuOpen, closeMenu } = useStore();

  if (!isMenuOpen) return;

  const NAV_LINKS = [
    { href: "/#heritage", label: "إرثنا" },
    { href: "/menu", label: "المنيو" },
    { href: "/#signature", label: "طبقنا المميز" },
    { href: "/about", label: "من نحن" }, // صفحة مستقلة
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
          <Button className="drawer-close" onClick={() => closeMenu()}>
            ×
          </Button>
        </div>
        <div className="drawer-body">
          <nav className="drawer-links">
            <nav className="drawer-links">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} to={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </nav>
          <div className="drawer-divider"></div>
          <h4 className="drawer-subtitle">المفضلة</h4>
          <div id="favList"></div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default MobileMenu;
