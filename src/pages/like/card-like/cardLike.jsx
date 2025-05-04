import { Heart } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";

const CardLike = ({ img, title, price, oldPrice, id }) => {
  const { dispatch } = useContext(ShopContext);

  const handleRemoveLike = () => {
    dispatch({ type: "delete_like", id });
  };

  return (
    <div className="shadow p-4 rounded-xl">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-[200px] h-[200px] flex items-center m-auto justify-center"
        />
        <div
          onClick={handleRemoveLike}
          className="absolute top-0 right-3 cursor-pointer text-red-500"
        >
          <Heart fill="red" />
        </div>
      </div>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm line-through text-gray-400">{price}</p>
        <p className="text-black">{oldPrice} so'm</p>
      </div>
    </div>
  );
};

export default CardLike;
