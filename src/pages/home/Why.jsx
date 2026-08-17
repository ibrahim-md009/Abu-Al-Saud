import FadeAnimation from "../../components/ui/FadeAnimation";
import { ArrowUp, CircleCheck, CirclePlus } from "lucide-react";

const whyItems = [
  {
    id: 1,
    icon: CircleCheck,
    title: "مكونات أصلية",
    description: "سمنة بلدي وجبنة عكاوي طازجة، بلا بدائل ولا اختصارات.",
  },
  {
    id: 2,
    icon: CirclePlus,
    title: "إرث منذ ١٨٩٦",
    description: "وصفات توارثتها الأجيال دون أن يتغيّر فيها طعم الأصالة.",
  },
  {
    id: 3,
    icon: ArrowUp,
    title: "طازج يومياً",
    description: "كل صنف يُحضَّر يومياً ليصلك في أفضل حالاته.",
  },
];

const Why = () => {
  return (
    <section className="on-ink why">
      <div className="container">
        <FadeAnimation className="section-head">
          <span className="eyebrow">لماذا أبو السعود</span>
          <h2 className="section-title">جودة لا نساوم عليها</h2>
        </FadeAnimation>

        <div className="why-grid">
          {whyItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <FadeAnimation className="why-item" key={item.id}>
                <IconComponent className="icon" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </FadeAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Why;
