import React from "react";
import useFetch from "../hooks/useFetch";
import SliderComp from "../components/home/SliderComp";

const Home = () => {
  const { data, loading, error } = useFetch("/users/6450d9760fcad193c1b8661c");
  console.log(data);
  return (
    <div>
      <SliderComp />
    </div>
  );
};

export default Home;
