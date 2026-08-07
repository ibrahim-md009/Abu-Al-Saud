import logo from "../../assets/images/logo.png";
import { Link } from "react-router";

import { ArrowLeft } from "lucide-react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <span className="eyebrow" id="heroEyebrow">
          عراقة الشرق منذ عام ١٨٩٦
        </span>
        <img className="hero-logo" src={logo} alt="أبو السعود - Abu Alsoud" />
        <h1 className="hero-line">من فرن الأجداد، إلى موائدكم اليوم</h1>
        <p className="hero-sub">
          اسمٌ اشتهر على موائد مصر وفلسطين، وحافظ على وصفة الأجداد كما هي: كنافة
          تُحشى بالجبنة العكاوي الأصلية، وبقلاوة تُطهى بالسمنة البلدي والقطر
          الصافي.
        </p>

        <div className="hero-actions">
          <Link to="/menu" className="cta-ghost">
            تصفّح المنيو
            <ArrowLeft />
          </Link>
          <a href="#heritage" className="cta-ghost">
            قصة العائلة
            <ArrowLeft />
          </a>
        </div>
      </div>

      <div className="scroll-hint">
        <a
          href="#menu"
          className="scroll-arrow"
          aria-label="انتقل إلى المنتجات"
        >
          <ArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
