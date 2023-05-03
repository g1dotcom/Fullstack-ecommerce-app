import React, { useContext, useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem(token));
  }, []);

  return [token];
};

export default useToken;
