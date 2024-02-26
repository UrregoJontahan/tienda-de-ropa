import React, { useState } from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { Category } from './Categories/Category';
import { User } from './Users/User';
import { Modal } from './Modal';

function App() {
    const [details, setDetails] = useState(null)
    
    const showDetails=(product)=>{
        setDetails(product)
    }

 return (
     <React.Fragment>
        <Header/>
        <DataProvider>
            <User/>
            <InputSearch />
            <ListProducts showDetails={showDetails}/>
            <Category/>
            {details && <Modal product={details}
                onClose={()=>setDetails(null)}
            />}
        </DataProvider>
     </React.Fragment>
 )
}

export default App

