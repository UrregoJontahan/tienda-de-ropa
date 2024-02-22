import React, { createContext, useState } from "react";
import { useGetProductsApi } from "../Api";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const data = useGetProductsApi()

  return (
    <DataContext.Provider value = {data}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };


