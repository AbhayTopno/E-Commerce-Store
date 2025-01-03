import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className="ml-[10rem] text-white">
      <h1 className="text-3xl font-bold ml-[3rem] mt-[3rem] mb-[2rem]">
        FAVORITE PRODUCTS
      </h1>

      <div className="flex flex-wrap">
        {favorites.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
