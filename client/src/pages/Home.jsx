import React from "react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch("/users/6450d9760fcad193c1b8661c");
  console.log(data);
  return <div>HomePage</div>;
};

export default Home;
