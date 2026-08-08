import Button from "./Button";
import { Heart, ShoppingCart } from "lucide-react";
import { useStore } from "../../store/useStore";

const Product = ({ p }) => {
  const { openSizeSheet, toggleFav, favItems = [], cartItems } = useStore();

  const isFav = favItems.some((item) => String(item.id) === String(p.id));

  const cartItem = cartItems.filter((item) => String(item.id) === String(p.id));

  const productCount = cartItem.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  const isExisted = productCount > 0;

  return (
    <div className="menu-row show">
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
          {p.prices?.[0]?.price || p.price}
          <small>ج.م</small>
        </span>

        <div className="row-actions">
          <Button
            className={`icon-sm fav-btn ${isFav ? "active" : ""}`}
            onClick={() => toggleFav(p)}
            aria-label="أضف للمفضلة"
          >
            <Heart />
          </Button>

          <Button
            className={`icon-sm cart-btn icon-btn ${isExisted ? "active" : ""}`}
            aria-label="أضف للسلة"
            onClick={() => openSizeSheet(p)}
          >
            <ShoppingCart />
            {productCount > 0 && (
              <span className="badge" id="cartBadge">
                {productCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
