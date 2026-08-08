import { Fragment } from "react";
import data from "../../data/products.json";

const orientalSubCategoryIds = data.subCategories
  .filter((sub) => sub.mainCategoryId === "oriental")
  .map((sub) => sub.id);

const orientalProducts = data.products.filter((p) =>
  orientalSubCategoryIds.includes(p.subCategoryId),
);

const Marquee = () => {
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
