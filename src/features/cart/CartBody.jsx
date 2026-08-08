import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import Button from "../../components/ui/Button";

const CartBody = () => {
  const { cartItems, closeCart, updateQuantity, delProduct } = useStore();
  return (
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
            لم تقم بإضافة أي منتجات إلى السلة بعد. استكشف قائمتنا واستمتع بأشهى
            الحلويات!
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
                    <Button onClick={() => updateQuantity(item, 1)}>+</Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => updateQuantity(item, -1)}>-</Button>
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
  );
};

export default CartBody;
