import React from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Header/Search';
import { ListProducts } from './ListProducts';
import { Home } from './counterCate_Prod';

function App() {
 return (
   <DataProvider>
        <Header/>
        <InputSearch/>
        <ListProducts/>
        <Home>
          
        </Home>
   </DataProvider>
 )
}

export default App

