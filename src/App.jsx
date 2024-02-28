import React, { useState } from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { Category } from './Categories/Category';
import { User } from './Users';
import { Modal } from './Modal';
import { Cart } from './AddCart';
import { useEffect } from 'react';

function App() {

    const [details, setDetails] = useState(null)
    const [categories, setCategories] = useState([])
    const [cart, setCart] = useState([])
    
    const showDetails=(product) => {
        setDetails(product)
    }

    const handleCategorySelect = (category) =>{
        setCategories(category)
    }

    const addCart = (product) => {
         setCart([...cart,product])
    }

 return (
     <React.Fragment>
        <Header/>
        <Cart count={cart.length}/>
        <DataProvider>
            <User/>
            <InputSearch />
            <ListProducts 
                showDetails={showDetails}
                selectedCategory={categories}
                addCart={addCart}
            />
            <Category 
                onSelect={handleCategorySelect}
            />
            {details && <Modal product={details}
                onClose={()=>setDetails(null)}
                addCart={addCart}
            />}

        </DataProvider>
     </React.Fragment>
 )
}

export default App

