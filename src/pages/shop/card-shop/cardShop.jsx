import { Button } from "antd";
import { Trash, Type } from "lucide-react";
import React, { useContext } from "react";
import { ShopContext } from "../../../context/shop-context/shopContext";

const CardShop = ({
  id,
  title,
  price,
  oldPrice,
  rate,
  name,
  moth,
  img,
  count,
  userPrice,
}) => {
  const { state, dispatch } = useContext(ShopContext);

  return (
    <div className=" rounded-xl border border-[#dbd9d9] bg-white shadow-[0_10px_30px_0_rgba(209,213,223,0.9)] p-[16px_30px] gap-5 justify-between flex items-center">
      <img className="w-[100px] h-[100px]" src={img} alt={title} />
      <div className="flex flex-col gap-3">
        <h1>{title.slice(0, 40) + "..."}</h1>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <Trash
              onClick={() => dispatch({ type: "delete", id })}
              className="cursor-pointer text-red-500"
            />
            <p className="text-red-500">Remove</p>
          </div>
          <p>{userPrice.toLocaleString("ru-RU") + " so'm"}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <Button
          onClick={() => dispatch({ type: "decrement", id })}
          shape="circle"
          className="flex items-center justify-center text-lg"
        >
          -
        </Button>
        <span>{count}</span>
        <Button
          onClick={() => dispatch({ type: "increment", id })}
          shape="circle"
          className="flex items-center justify-center text-lg"
        >
          +
        </Button>
      </div>
      <p>{oldPrice.toLocaleString("ru-RU") + " so'm"}</p>
    </div>
  );
};

export default CardShop;
