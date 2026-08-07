import React from "react";
import data from "../../data/products.json";

const orientalSubCategoryIds = data.subCategories
  .filter((sub) => sub.mainCategoryId === "oriental")
  .map((sub) => sub.id);

const orientalProducts = data.products.filter((p) =>
  orientalSubCategoryIds.includes(p.subCategoryId),
);
console.log("Oriental products count:", orientalProducts.length);
console.log(orientalProducts.map((p) => p.name));

const Marquee = () => {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...orientalProducts, ...orientalProducts].map((p, i) => (
          <React.Fragment key={`${p.id}-${i}`}>
            <span>{p.name}</span>
            <span className="dot">◆</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
