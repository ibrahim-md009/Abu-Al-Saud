import logo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import FadeAnimation from "../../components/ui/FadeAnimation";

const Footer = () => {
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
            rel="noopener"
            className="cta-btn cta-solid wa-link"
          >
            <span className="cta-label">تواصل معنا عبر واتساب</span>
          </a>
        </FadeAnimation>
        <FadeAnimation className="social">
          <a href="https://www.facebook.com/abusaudsweets" aria-label="فيسبوك">
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/abusaudsweets/"
            aria-label="إنستغرام"
          >
            <InstagramIcon />
          </a>
        </FadeAnimation>
        <div className="foot-line"></div>
        <p className="foot-note">
          © جميع الحقوق محفوظة لحلويات أبو السعود.
          <br />
          الأسعار والتوفر قابلة للتغيير — يُرجى التأكيد عبر التواصل المباشر.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
