import FadeAnimation from "../../components/ui/FadeAnimation";
import { ArrowUp, CircleCheck, CirclePlus } from "lucide-react";

const Why = () => {
  return (
    <section className="on-ink why">
      <div className="container">
        <FadeAnimation className="section-head">
          <span className="eyebrow">لماذا أبو السعود</span>
          <h2 className="section-title">جودة لا نساوم عليها</h2>
        </FadeAnimation>

        <div className="why-grid">
          <FadeAnimation className="why-item">
            <CircleCheck className="icon" />
            <h4>مكونات أصلية</h4>
            <p>سمنة بلدي وجبنة عكاوي طازجة، بلا بدائل ولا اختصارات.</p>
          </FadeAnimation>

          <FadeAnimation className="why-item">
            <CirclePlus className="icon" />
            <h4>إرث منذ ١٨٩٦</h4>
            <p>وصفات توارثتها الأجيال دون أن يتغيّر فيها طعم الأصالة.</p>
          </FadeAnimation>

          <FadeAnimation className="why-item">
            <ArrowUp className="icon" />
            <h4>طازج يومياً</h4>
            <p>كل صنف يُحضَّر يومياً ليصلك في أفضل حالاته.</p>
          </FadeAnimation>
        </div>
      </div>
    </section>
  );
};

export default Why;
