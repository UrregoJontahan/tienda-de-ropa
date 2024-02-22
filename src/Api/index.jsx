import { useState, useEffect } from "react";

const useGetProductsApi =() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setData(Array.isArray(jsonData)?jsonData:[]);
};

  return data;
};

export { useGetProductsApi };