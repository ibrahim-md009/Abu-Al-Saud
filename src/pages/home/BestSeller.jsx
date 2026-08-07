import FadeAnimation from "../../components/ui/FadeAnimation";
import data from "../../data/products.json";
import Button from "../../components/ui/Button";
import { ArrowDown, Heart, ShoppingCart } from "lucide-react";
import { useStore } from "../../store/useStore";
import { Link } from "react-router-dom";
import { useState } from "react";

const BestSeller = () => {
  const { openSizeSheet, toggleFav, favItems } = useStore();
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
            const isFav = (favItems || []).some(
              (item) => String(item.id) === String(p.id),
            );
            return (
              <div key={p.id} className="menu-row show">
                <div className="row-media">
                  {p.image && <img src={p.image} alt={p.name} loading="lazy" />}
                </div>

                <div className="row-main">
                  <div className="row-heading">
                    <h3 className="row-title">{p.name}</h3>
                    {p.tag && <span className="row-tag">{p.tag}</span>}
                  </div>
                  {p.desc && <p className="row-desc">{p.desc}</p>}
                </div>

                <div className="row-side">
                  <span className="row-price">
                    {p.prices[0].price}
                    <small>ج.م</small>
                  </span>

                  <div className="row-actions">
                    <Button
                      className={`icon-sm fav-btn ${isFav ? "active" : ""}`}
                      onClick={() => toggleFav(p)}
                      aria-label="أضف للمفضلة"
                    >
                      <Heart />
                    </Button>

                    <Button
                      className="icon-sm cart-btn"
                      aria-label="أضف للسلة"
                      onClick={() => openSizeSheet(p)}
                    >
                      <ShoppingCart />
                    </Button>
                  </div>
                </div>
              </div>
            );
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
