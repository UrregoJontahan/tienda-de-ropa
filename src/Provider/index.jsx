import React, { createContext, useEffect, useState } from "react";
import { Users, categoriesApi, useGetProductsApi } from "../Api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories]=useState([])
  const [user, setUser]=useState([])

  useEffect(()=>{
    fetchData()
    fetchCategories()
    fetchUser()
  },[])

  const fetchData= async ()=>{
    const data = await useGetProductsApi()
      setProducts(Array.isArray(data) ? data : [])
    }

  const fetchCategories = async ()=>{
    const data = await categoriesApi()
      setCategories(Array.isArray(data) ? data : [])
  }  

  const fetchUser = async ()=>{
    const data = await Users()
      setUser(data)
  }  

  return (
    <DataContext.Provider value = {{  products , categories , user }}>
        {children} 
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };


