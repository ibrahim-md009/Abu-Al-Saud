import { useState } from "react";
import FadeAnimation from "../components/ui/FadeAnimation";

import data from "../data/products.json";
import { Heart, ShoppingCart } from "lucide-react";
import Button from "../components/ui/Button";
import { useStore } from "../store/useStore";

const Menu = () => {
  const { openSizeSheet } = useStore();

  const [activeMenu, setActiveMenu] = useState(
    data.mainCategories[0]?.id || "oriental",
  );

  const [activeTab, setActiveTab] = useState(
    data.subCategories[0]?.id || "kunafa",
  );

  const filteredSubCatigories = data.subCategories.filter((sub) => {
    return sub.mainCategoryId === activeMenu;
  });

  const filteredProducts = data.products.filter((product) => {
    return product.subCategoryId === activeTab;
  });

  const handleMainCategoryChange = (mainCatId) => {
    setActiveMenu(mainCatId);

    const firstSub = data.subCategories.find(
      (sub) => sub.mainCategoryId === mainCatId,
    );

    if (firstSub) {
      setActiveTab(firstSub.id);
    } else {
      const fallbackSub = data.subCategories[0];
      if (fallbackSub) setActiveTab(fallbackSub.id);
    }
  };

  return (
    <section className="on-ink" id="menu">
      <div className="container">
        <FadeAnimation className="section-head">
          <span className="eyebrow">قائمة الأصناف</span>
          <h2 className="section-title">اختر ما يليق بمناسبتك</h2>
          <p className="section-text">
            تشكيلة من أشهى الحلويات الشرقية، محضّرة يومياً بأيدٍ خبيرة.
          </p>
        </FadeAnimation>

        <FadeAnimation className="tabs">
          {data.mainCategories.map((mainCat) => {
            return (
              <Button
                key={mainCat.id}
                className={`tab-btn ${mainCat.id === activeMenu ? "active" : ""}`}
                onClick={() => {
                  handleMainCategoryChange(mainCat.id);
                }}
              >
                {mainCat.name}
              </Button>
            );
          })}
        </FadeAnimation>

        <FadeAnimation className="tabs">
          {filteredSubCatigories.map((subCat) => {
            return (
              <Button
                key={subCat.id}
                className={`tab-btn ${subCat.id === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(subCat.id)}
              >
                {subCat.name}
              </Button>
            );
          })}
        </FadeAnimation>

        <div className="menu-list" id="menuGrid">
          {filteredProducts.map((p) => {
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
                      className="icon-sm fav-btn"
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
      </div>
    </section>
  );
};

export default Menu;
