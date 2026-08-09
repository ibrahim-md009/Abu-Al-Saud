import Button from "../../components/ui/Button";
import SheetAnimation from "../../components/ui/SheetAnimation";
import { useStore } from "../../store/useStore";
import CartBody from "./CartBody";

const Cart = () => {
  const { cartItems, closeCart, isCartOpen, openCheckoutSheet } = useStore();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  if (!isCartOpen) return null;

  return (
    <>
      <div className="overlay show" id="overlay" onClick={closeCart}></div>

      <SheetAnimation
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

        <CartBody />

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
      </SheetAnimation>
    </>
  );
};

export default Cart;
