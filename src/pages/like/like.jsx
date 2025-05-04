import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context/shopContext";
import CardLike from "./card-like/cardLike";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Like = () => {
  const { state } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <section className="mt-10 min-h-screen flex items-center justify-center">
    <div className="container1 w-full gap-4 grid grid-cols-4">
      {state.likes.length > 0 ? (
        state.likes.map((value) => <CardLike key={value.id} {...value} />)
      ) : (
        <div className="col-span-4 flex items-center flex-col gap-5 justify-center h-[50vh]">
          <p className="text-center text-gray-500 text-lg">
            Yoqtirilgan mahsulot yo'q
          </p>
          <Button onClick={() => navigate("/")} >Home Pages</Button>
        </div>
      )}
    </div>
  </section>
  
  );
};

export default Like;
