import logo from "../../assets/images/logo.png";
import FadeAnimation from "../../components/ui/FadeAnimation";
import socialLinks from "../../data/socialLinks";

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
          {socialLinks.slice(0, 2).map(({ id, label, href, Icon }) => (
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
