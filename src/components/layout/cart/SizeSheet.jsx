import { useStore } from "../../../store/useStore";
import Button from "../../ui/Button";
import FadeAnimation from "../../ui/FadeAnimation";

const SizeSheet = () => {
  const { isSizeSheetOpen, closeSizeSheet, selectedProduct, addToCart } =
    useStore();

  if (!isSizeSheetOpen || !selectedProduct) return null;

  const sizes = selectedProduct.prices || [];

  return (
    <>
      <div className="overlay show" id="overlay" onClick={closeSizeSheet}></div>

      <FadeAnimation
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sheet"
        id="sizeSheet"
      >
        <div className="sheet-handle"></div>
        <div className="sheet-head">
          <h4 className="sheet-title" id="sheetTitle">
            اختر الكمية
          </h4>
          <Button
            className="drawer-close"
            data-close
            aria-label="إغلاق"
            onClick={closeSizeSheet}
          >
            ×
          </Button>
        </div>

        <p className="sheet-sub">
          حدد الكمية المطلوبة ليُحسَب السعر تلقائياً ويُضاف للسلة.
        </p>

        <div className="sheet-options">
          {sizes.map((size, i) => {
            return (
              <Button
                key={i}
                className="sheet-opt"
                onClick={() => {
                  closeSizeSheet();
                  addToCart(selectedProduct, size);
                }}
              >
                <span className="opt-name text-lg">{size.name}</span>
                <span className="opt-price text-lg" id="priceKilo">
                  {size.price} <small>ج.م</small>
                </span>
              </Button>
            );
          })}
        </div>
      </FadeAnimation>
    </>
  );
};

export default SizeSheet;
