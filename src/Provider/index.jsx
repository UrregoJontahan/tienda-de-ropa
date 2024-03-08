import React, { createContext, useEffect, useState } from "react";
import { Users, categoriesApi, useGetProductsApi } from "../Api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState([])
  const [searchProducts, setSearchProducts] = useState("")

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

  const handleSearchChange = (searchText) => {
    setSearchProducts(searchText);
  };

const filterProducts = products.filter(
    product=>{
      const productText=product.title.toLowerCase();
      const textProduct=searchProducts.toLowerCase()
      
      return productText.includes(textProduct)
    }
    ); 

  return ( 
    <DataContext.Provider value = {{  products , categories , user , handleSearchChange , filterProducts }}>
        {children} 
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };


