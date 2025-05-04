import React, { useContext } from "react";
import logo from "../../assets/imgs/logo.png";
import { Badge, Button } from "antd";
import { Contact, EthernetPort, Heart, Link, ShoppingCart } from "lucide-react";
import { ShopContext } from "../../context/shop-context/shopContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(ShopContext);
  const navigate = useNavigate();
  return (
    <header>
      <div className="container1 py-5 flex items-center justify-between">
        <div onClick={() => navigate("/")}>
          <img className="cursor-pointer" src={logo} alt="logo " />
        </div>
        <div className="flex items-center gap-5">
          <Button variant="outlined">
            <Contact />

            <h1>Kirish</h1>
          </Button>
          <Button onClick={() => navigate("/like")} variant="outlined">
            <Badge count={state.data.length}>
              <Heart />
            </Badge>

            <h1>Saralangan</h1>
          </Button>
          <Button onClick={() => navigate("/shop")} variant="outlined">
            <Badge count={state.data.length}>
              <ShoppingCart />
            </Badge>
            <h1>Savat</h1>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
