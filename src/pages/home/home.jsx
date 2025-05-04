import React from "react";
import { useAxiosGet } from "../../hooks/useAxios";
import Card from "./card/card";

const Home = () => {
  const { data, loading } = useAxiosGet({ url: "/asaxiy" });
  
  return <div className="container1">
    <h1>Products:</h1>
    <div className="grid grid-cols-5 gap-5 my-6">
        {data.map(value=>(
            <Card key={value.id} {...value}/>
        ))}
    </div>
  </div>;
};

export default Home;
