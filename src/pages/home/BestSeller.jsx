import FadeAnimation from "../../components/ui/FadeAnimation";
import data from "../../data/products.json";
import Button from "../../components/ui/Button";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Product from "../../components/ui/Product";

const BestSeller = () => {
  const bestSeller = data.products.filter((p) => p.tag === "الأكثر طلباً");

  const [visibleCount, serVisibleCount] = useState(5);

  return (
    <FadeAnimation id="menu" className="section on-ink pt-30">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">الأكثر مبيعا</span>
          <h2 className="section-title">اختر من بين أكثر الأطباق مبيعا</h2>
          <p className="section-text">
            تشكيلة من أشهى الحلويات الشرقية، محضّرة يومياً بأيدٍ خبيرة.
          </p>
        </div>

        <div className="menu-list">
          {bestSeller.slice(0, visibleCount).map((p) => {
            return <Product key={`${p.id} - ${p.name}`} p={p} />;
          })}
        </div>
        {visibleCount < bestSeller.length && (
          <div className="my-10 flex justify-center">
            <Button
              className="flex gap-2 rounded-full border border-[#b8862f] px-6 py-2.5 text-sm font-medium text-[#efe4d0] transition-all hover:bg-[#b8862f] hover:text-[#5c1f16]"
              onClick={() => serVisibleCount(bestSeller.length)}
            >
              <span>عرض المزيد</span> <ArrowDown />
            </Button>
          </div>
        )}

        {visibleCount === bestSeller.length && (
          <div className="my-10 flex justify-center">
            <Button
              className="flex gap-2 rounded-full border border-[#b8862f] px-6 py-2.5 text-sm font-medium text-[#efe4d0] transition-all hover:bg-[#b8862f] hover:text-[#5c1f16]"
              onClick={() => {
                serVisibleCount(5);

                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>عرض أقل</span> <ArrowUp />
            </Button>
          </div>
        )}

        <div className="my-10 flex justify-center">
          <Link to="/menu" className="cta-btn cta-solid">
            تصفح المنيو بالكامل
          </Link>
        </div>
      </div>
    </FadeAnimation>
  );
};

export default BestSeller;
