import { Fragment, useMemo } from "react";
import { useData } from "../../store/useData";

const Marquee = () => {
  const { subCategories, products } = useData();

  const orientalProducts = useMemo(() => {
    const ids = subCategories
      .filter((sub) => sub.mainCategoryId === "oriental")
      .map((sub) => sub.id);
    return products.filter((p) => ids.includes(p.subCategoryId));
  }, [products, subCategories]);

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...orientalProducts, ...orientalProducts].map((p, i) => (
          <Fragment key={`${p.id}-${i}`}>
            <span>{p.name}</span>
            <span className="dot">◆</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
