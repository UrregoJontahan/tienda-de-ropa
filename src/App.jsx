import React, { useState } from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { Category } from './Categories/Category';
import { User } from './Users/User';

function App() {

 return (
  <DataProvider>
      <User/>
      <Header/>
      <InputSearch />
      <ListProducts/>
      <Category/>
  </DataProvider>
 )
}

export default App

