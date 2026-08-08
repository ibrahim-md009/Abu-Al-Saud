import FadeAnimation from "../../components/ui/FadeAnimation";
import Button from "../../components/ui/Button";
import { useStore } from "../../store/useStore";
import { useData } from "../../store/useData";

const Signature = () => {
  const { products } = useData();
  const { openSizeSheet } = useStore();
  const eyebrow = products.find((p) => p.tag === "توقيعنا الخاص");
  return (
    <section className="on-cream signature" id="signature">
      <div className="sig-watermark">كنافة</div>
      <div className="container">
        <FadeAnimation className="sig-content">
          <span className="eyebrow">توقيعنا الخاص</span>
          <h3>كنافة نابلسية أبو السعود</h3>
          <p>
            الطبق الذي بُني عليه اسمنا: كنافة ناعمة تُطهى بالسمنة البلدي، وتُحشى
            بجبنة عكاوي ونابلسية طازجة، وتُقدَّم ساخنة بقطرٍ مُعتّق بماء الزهر.
            تجربة لا تشبه إلا نفسها.
          </p>
          <span className="sig-price">
            500 <small>ج.م</small>
          </span>
          <div>
            <Button
              className="cta-btn cta-solid"
              onClick={() => openSizeSheet(eyebrow)}
            >
              <span className="cta-label">أضف للسلة</span>
            </Button>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
};

export default Signature;
