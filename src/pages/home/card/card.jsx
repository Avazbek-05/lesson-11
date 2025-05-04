import { Button } from "antd";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";
import { data } from "react-router-dom";
import toast from "react-hot-toast";

const Card = (value) => {
  const { state, dispatch } = useContext(ShopContext);
  let { id, title, price, oldPrice, rate, name, moth, img } = value;
  return (
    <div
      className="shadow-[0_10px_30px_0_rgba(209,213,223,0.5)] p-2 
       rounded-2xl relative transition-all duration-300 hover:shadow-[0_15px_40px_0_rgba(209,213,223,0.8)] hover:scale-105 "
    >
      <div className="flex flex-col  items-center justify-center relative">
        <img className="w-[200px] pt-2 h-[200px]" src={img} alt="img" />
        <div
          className="absolute top-0 right-2 cursor-pointer"
          onClick={() => {
            const isAlreadyLiked = state.likes.some(
              (item) => item.id === value.id
            );
            if (isAlreadyLiked) {
              toast.error("Bu mahsulot allaqachon yoqtirilgan");
            } else {
              dispatch({ type: "like_product", data: value });
              toast.success("Like qilindi!");
            }
          }}
        >
          <Heart />
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-2 ml-2 pr-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-[13px] text-[#1f2026]">
            {title.slice(0, 50) + "..."}
          </h1>
          <div className="flex items-center gap-2">
            <StarIcon className="text-[gold] cursor-pointer" />
            <p className="text-[#7e818c] text-sm"> {rate}</p>
          </div>
          <p className="bg-[#ff0] rounded-sm text-center px-1 py-0.5 w-fit">
            {moth + " so'm/oyiga"}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col ">
            <p className="text-[#7e818c] text-[13px] line-through">
              {price.toLocaleString("ru-RU")}
            </p>
            <p className="text-[#1f2026] text-sm ">
              {oldPrice.toLocaleString("ru-RU") + " so'm"}
            </p>
          </div>
          <div
            onClick={() => {
              dispatch({ type: "add_product", data: value });
              toast.success("Savadtga qo'shildi ! ");
            }}
            className="p-2 w-fit border border-gray-300 rounded-full cursor-pointer
             transition-all duration-300 ease-in-out
             hover:shadow-lg hover:scale-110 hover:border-[#1677ff] hover:bg-[#e6f4ff]
             group"
          >
            <ShoppingBag className="text-gray-600 transition-colors duration-300 group-hover:text-[#1677ff]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
