import React, { useContext } from "react";
import CardShop from "./card-shop/cardShop";
import { ShopContext } from "../../context/shop-context/shopContext";
import { Button, Empty } from "antd";

const Shop = () => {
  const { state, dispatch } = useContext(ShopContext);
  const totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );
  if(!state.data.length){
    return <Empty className="flex flex-col items-center justify-center h-screen"/>
  }
  return (
    <section className="mt-10">
      <div className="container1 flex items-start gap-5">
        <div className="w-full flex flex-col gap-4">
          {state.data.map((value) => (
            <CardShop key={value.id} {...value} />
          ))}
        </div>
        <div className="w-[450px] rounded-xl border border-[#dbd9d9] bg-white shadow-[0_10px_30px_0_rgba(209,213,223,0.9)] p-[16px_30px] gap-5">
          <h1 className="text-xl">Buyurtmangiz</h1>
          <hr className="my-5" />
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-medium">Jami summa</h1>
            <p>{totalPrice.toLocaleString("ru-RU")} so'm</p>
          </div>
          <Button className="w-full mt-4" type="primary">
            Rasmiylashtirishga o'tish
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
