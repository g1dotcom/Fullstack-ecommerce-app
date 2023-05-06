import React from "react";
import useFetch from "../hooks/useFetch";

//Components
import SliderComp from "../components/home/SliderComp";
import MiniBanner from "../components/miniBanner/MiniBanner";
import Categories from "../components/categories/Categories";
import ServicesC from "../components/servicesC/ServicesC";

const Home = () => {
  const { data, loading, error } = useFetch("/users/6450d9760fcad193c1b8661c");
  console.log(data);
  return (
    <div>
      <SliderComp />
      <ServicesC />
      <Categories />
      <MiniBanner />
    </div>
  );
};

export default Home;
