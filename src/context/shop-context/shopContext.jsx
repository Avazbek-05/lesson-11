import { Children, createContext, useReducer } from "react";

import { data } from "react-router-dom";

const ShopContext = createContext({});

const ShopContextProvider = ({ children }) => {
  const initialState = {
    data: JSON.parse(localStorage.getItem("data")) || [],
    likes: JSON.parse(localStorage.getItem("likes")) || [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "like_product":
        if (!action.data || !state.likes) return state;

        // LIKE allaqachon qo‘shilganini tekshiramiz
        const alreadyLiked = state.likes.find(
          (item) => item.id === action.data.id
        );
        if (alreadyLiked) {
          toast.error("Bu mahsulot allaqachon yoqtirilgan");
          return state; // like qayta qo‘shilmasin
        }

        const newLikes = [...state.likes, action.data];
        localStorage.setItem("likes", JSON.stringify(newLikes));

        return { ...state, likes: newLikes };

      case "add_product":
        if (state.data.find((value) => value.id === action.data.id)) {
          const updatedData = state.data.map((value) => {
            if (value.id === action.data.id) {
              return {
                ...value,
                count: value.count + 1,
                userPrice: (value.count + 1) * action.data.oldPrice,
              };
            }
            return value;
          });

          localStorage.setItem("data", JSON.stringify(updatedData));
          return { data: updatedData };
        } else {
          let newData = {
            data: [
              ...state.data,
              { ...action.data, count: 1, userPrice: action.data.oldPrice },
            ],
          };
          localStorage.setItem("data", JSON.stringify(newData.data));
          return newData;
        }
      case "increment":
        const updatedDataIncrement = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count + 1,
              userPrice: (value.count + 1) * value.oldPrice,
            };
          }
          return value;
        });
        localStorage.setItem("data", JSON.stringify(updatedDataIncrement));
        return { data: updatedDataIncrement };
      case "decrement":
        const updatedDataDecrement = state.data.map((value) => {
          if (value.id === action.id) {
            return {
              ...value,
              count: value.count <= 1 ? 1 : value.count - 1,
              userPrice:
                value.count <= 1
                  ? value.oldPrice
                  : (value.count - 1) * value.oldPrice,
            };
          }
          return value;
        });
        localStorage.setItem("data", JSON.stringify(updatedDataDecrement));
        return { data: updatedDataDecrement };
      case "delete":
        const deleteProduct = state.data.filter(
          (value) => value.id !== action.id
        );
        localStorage.setItem("data", JSON.stringify(deleteProduct));
        return { data: deleteProduct };
      case "delete_like":
        const updatedLikes = state.likes.filter(
          (item) => item.id !== action.id
        );
        localStorage.setItem("likes", JSON.stringify(updatedLikes));
        return { ...state, likes: updatedLikes };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
