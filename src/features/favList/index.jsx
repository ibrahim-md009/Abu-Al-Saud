import { useStore } from "../../store/useStore";
import FavList from "../../components/layout/FavList";
import Button from "../../components/ui/Button";
import SheetAnimation from "../../components/ui/SheetAnimation";

const Favorites = () => {
  const { isFavListOpen, closeFavList } = useStore();

  if (!isFavListOpen) return null;

  return (
    <>
      <div className="overlay show" onClick={closeFavList}></div>

      <SheetAnimation
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="sheet fav-sheet"
      >
        <div className="sheet-handle"></div>
        <div className="drawer-head">
          <h4 className="drawer-subtitle">المفضلة</h4>
          <Button className="drawer-close" onClick={closeFavList}>
            ×
          </Button>
        </div>

        <FavList />
      </SheetAnimation>
    </>
  );
};

export default Favorites;
