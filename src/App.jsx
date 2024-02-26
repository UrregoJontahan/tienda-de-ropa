import React, { useState } from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { Category } from './Categories/Category';
import { User } from './Users';
import { Modal } from './Modal';

function App() {
    const [details, setDetails] = useState(null)
    const [categories, setCategories] = useState([])
    
    const showDetails=(product)=>{
        setDetails(product)
    }

    const onSelect=(category)=>{
        setCategories(category)
    }

 return (
     <React.Fragment>
        <Header/>
        <DataProvider>
            <User/>
            <InputSearch />
            <ListProducts 
                showDetails={showDetails}/>
            <Category 
                onSelect={onSelect}/>
            
            {details && <Modal product={details}
                onClose={()=>setDetails(null)}
            />}

        </DataProvider>
     </React.Fragment>
 )
}

export default App

