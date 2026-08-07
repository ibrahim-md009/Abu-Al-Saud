import Button from "../../ui/Button";
import { useStore } from "../../../store/useStore";
import FadeAnimation from "../../ui/FadeAnimation";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    closeCart,
    isCartOpen,
    updateQuantity,
    delProduct,
    openCheckoutSheet,
  } = useStore();

  const total = useStore(
    (state) =>
      state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ) || 0,
  );

  if (!isCartOpen) return null;

  return (
    <>
      <div className="overlay show" id="overlay" onClick={closeCart}></div>

      <FadeAnimation
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sheet cart-sheet"
        id="cartDrawer"
      >
        <div className="sheet-handle"></div>
        <div className="drawer-head">
          <span>سلة المشتريات</span>
          <Button className="drawer-close" data-close onClick={closeCart}>
            ×
          </Button>
        </div>

        <div className="drawer-body" id="cartList">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="mt-5 flex h-15 w-15 items-center justify-center rounded-full border border-(--line-onink) bg-(--ink) shadow-inner">
                <ShoppingCart className="h-9 w-9 text-(--gold-soft) opacity-80" />
              </div>

              <h3 className="font-['Aref_Ruqaa'] text-xl text-(--gold-pale)">
                سلة الشراء فارغة
              </h3>

              <p className="max-w-55 text-sm leading-relaxed text-(--muted-onink)">
                لم تقم بإضافة أي منتجات إلى السلة بعد. استكشف قائمتنا واستمتع
                بأشهى الحلويات!
              </p>

              <Link
                onClick={closeCart}
                to="/menu"
                className="flex items-center justify-center rounded-full border border-(--gold) px-4 py-2 text-lg leading-none whitespace-nowrap text-(--gold-soft) transition-all duration-300 hover:bg-(--gold) hover:text-(--ink) active:scale-95"
              >
                تصفح القائمة الآن
              </Link>
            </div>
          ) : (
            <div>
              {cartItems.map((item) => {
                return (
                  <div key={`${item.id}-${item.size}`} className="cart-row">
                    <div className="row-info flex flex-col">
                      <span className="row-name">
                        {item.name} ({item.size})
                      </span>

                      <span className="row-price-sm">{item.price} ج.م</span>
                    </div>

                    <div className="row-actions-sm">
                      <div className="qty-stepper">
                        <Button onClick={() => updateQuantity(item, 1)}>
                          +
                        </Button>
                        <span>{item.quantity}</span>
                        <Button onClick={() => updateQuantity(item, -1)}>
                          -
                        </Button>
                      </div>
                      <Button
                        className="row-remove"
                        onClick={() => delProduct(item)}
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-foot">
            <div className="cart-total">
              <span>الإجمالي </span>
              <strong id="cartTotal">{total} ج.م</strong>
            </div>

            <Button
              id="proceedBtn"
              className="cta-btn cta-solid w-full justify-center"
              onClick={() => {
                closeCart();
                openCheckoutSheet();
              }}
            >
              <span className="cta-label">متابعة الطلب</span>
            </Button>
          </div>
        )}
      </FadeAnimation>
    </>
  );
};

export default Cart;
