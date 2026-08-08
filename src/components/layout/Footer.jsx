import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import logo from "../../assets/images/logo.png";
import FadeAnimation from "../../components/ui/FadeAnimation";

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
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <div className="container">
        <img className="footer-logo" src={logo} alt="أبو السعود" />
        <FadeAnimation className="foot-tag">
          حلويات شرقية أصيلة · مصر وفلسطين · منذ ١٨٩٦
        </FadeAnimation>
        <FadeAnimation className="foot-cta">
          <a
            href="https://wa.me/201070100122"
            id="waFooterBtn"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-solid wa-link"
          >
            <span className="cta-label">تواصل معنا عبر واتساب</span>
          </a>
        </FadeAnimation>
        <FadeAnimation className="social justify-center">
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
        </FadeAnimation>
        <div className="foot-line"></div>
        <p className="foot-note">
          © {currentYear} جميع الحقوق محفوظة لحلويات أبو السعود.
          <br />
          الأسعار والتوفر قابلة للتغيير — يُرجى التأكيد عبر التواصل المباشر.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
