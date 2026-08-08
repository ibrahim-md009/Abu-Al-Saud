import { useState } from "react";
import { useData } from "../store/useData";
import FadeAnimation from "../components/ui/FadeAnimation";
import Button from "../components/ui/Button";
import Product from "../components/ui/Product";

const Menu = () => {
  const { mainCategories, subCategories, loading, products } = useData();

  const [activeMenu, setActiveMenu] = useState(() => {
    return mainCategories[0]?.id || "oriental";
  });

  const [activeSub, setActiveSub] = useState(() => {
    return subCategories[0]?.id || "kunafa";
  });

  const filteredSubCategories = subCategories.filter((sub) => {
    return sub.mainCategoryId === activeMenu;
  });

  const filteredProducts = products.filter((product) => {
    return product.subCategoryId === activeSub;
  });

  const handleMainCategoryChange = (mainCatId) => {
    setActiveMenu(mainCatId);

    const firstSub = subCategories.find(
      (sub) => sub.mainCategoryId === mainCatId,
    );

    if (firstSub) {
      setActiveSub(firstSub.id);
    } else {
      const fallbackSub = subCategories[0];
      if (fallbackSub) setActiveSub(fallbackSub.id);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center text-white">جاري تحميل المنيو...</div>
    );
  }

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

        <FadeAnimation className="main-tabs">
          {mainCategories.map((mainCat) => {
            return (
              <Button
                key={mainCat.id}
                className={`main-tab-btn border border-amber-100 bg-amber-300 ${mainCat.id === activeMenu ? "active" : ""}`}
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
          {filteredSubCategories.map((subCat) => {
            return (
              <Button
                key={subCat.id}
                className={`tab-btn ${subCat.id === activeSub ? "active" : ""}`}
                onClick={() => setActiveSub(subCat.id)}
              >
                {subCat.name}
              </Button>
            );
          })}
        </FadeAnimation>

        <div className="menu-list" id="menuGrid">
          {filteredProducts.map((p) => (
            <Product key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
