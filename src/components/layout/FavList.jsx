import { useStore } from "../../store/useStore";
import { ShoppingCart } from "lucide-react";
import Button from "../ui/Button";

const FavList = () => {
  const { openSizeSheet, toggleFav, favItems, cartItems } = useStore();

  return (
    <div id="favList">
      {favItems.length > 0 ? (
        favItems.map((item) => {
          const productInCart = cartItems.filter(
            (c) => String(c.id) === String(item.id),
          );

          const productCount = productInCart.reduce(
            (total, c) => total + (c.quantity || 0),
            0,
          );

          const isExisted = productCount > 0;

          return (
            <div key={item.id} className="cart-row">
              <div className="row-info flex flex-col">
                <span className="row-name">{item.name}</span>
                <span className="row-price-sm">
                  {item.prices?.[0]?.price || item.price} ج.م
                </span>
              </div>

              <div className="row-actions-sm flex items-center gap-2">
                <Button
                  className={`icon-sm cart-btn icon-btn ${isExisted ? "active" : ""}`}
                  aria-label="أضف للسلة"
                  onClick={() => openSizeSheet(item)}
                >
                  <ShoppingCart size={16} />
                  {productCount > 0 && (
                    <span className="badge" id="cartBadge">
                      {productCount}
                    </span>
                  )}
                </Button>

                <Button
                  className="row-remove"
                  aria-label="حذف من المفضلة"
                  onClick={() => toggleFav(item)}
                >
                  ×
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="py-4 text-center text-sm text-gray-400">
          لا توجد عناصر في المفضلة بعد.
        </p>
      )}
    </div>
  );
};

export default FavList;
