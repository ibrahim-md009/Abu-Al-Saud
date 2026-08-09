import { useStore } from "../../store/useStore";
import FadeAnimation from "../ui/FadeAnimation";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import WhatsappIcon from "../../assets/icons/WhatsappIcon";
import FavList from "../layout/FavList";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/#heritage", label: "إرثنا" },
  { href: "/#signature", label: "طبقنا المميز" },
  { href: "/#menu", label: "الأكثر مبيعا" },
  { href: "/#contact", label: "تواصل معنا" },
  { href: "/menu", label: "المنيو" },
];

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "فيسبوك",
    href: "https://www.facebook.com/abusaudsweets",
    Icon: FacebookIcon,
  },
  {
    id: "instagram",
    label: "إنستغرام",
    href: "https://www.instagram.com/abusaudsweets/",
    Icon: InstagramIcon,
  },
  {
    id: "whatsapp",
    label: "واتساب",
    href: "https://wa.me/201070100122",
    Icon: WhatsappIcon,
  },
];

const MobileMenu = () => {
  const { isMenuOpen, closeMenu } = useStore();

  if (!isMenuOpen) return null;

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
          <FavList />
          <div className="drawer-divider mt-5"></div>

          <h4 className="drawer-subtitle">تابعونا</h4>
          <div className="social justify-start">
            {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </FadeAnimation>
    </>
  );
};

export default MobileMenu;
