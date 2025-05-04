import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context/shopContext";
import CardLike from "./card-like/cardLike";

const Like = () => {
  const { state } = useContext(ShopContext);

  return (
    <section className=" mt-10 ">
      <div className="container1 w-full gap-4 grid grid-cols-4">
        {state.likes.length > 0 ? (
          state.likes.map((value) => <CardLike key={value.id} {...value} />)
        ) : (
          <p className="text-center text-gray-500 flex flex-col  items-center gap-2 justify-center m-auto h-screen">
            Yoqtirilgan mahsulot yo'q
          </p>
        )}
      </div>
    </section>
  );
};

export default Like;
