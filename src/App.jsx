import React, { useState } from 'react';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { Category } from './Categories/Category';
import { User } from './Users';
import { Modal } from './Modal';
import { Cart } from './AddCart';
import { ProductsAddCart } from './ProductsSElected/ProductsAdd';
import { Empty } from './EmptyProducst';
import { useEffect } from 'react';

function App() {

    const [details, setDetails] = useState(null)
    const [categories, setCategories] = useState([])
    const [cart, setCart] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [clonedProduct, setClonedProduct] = useState([])
    const [quantityProducts, setQuantityProducts] = useState({})
    const [loading, setLoading] = useState(true)


    const showDetails=(product) => {
        setDetails(product)
    }

    const handleCategorySelect = (category) =>{
        setCategories(category)
    }
    const addCart = (product, selectedQuantity) => {
        
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += selectedQuantity;

        setCart(updatedCart);
        setClonedProduct(updatedCart);
        setQuantityProducts({
            ...quantityProducts,
            [product.id]: updatedCart[existingProductIndex].quantity
        });
        
    } else {
        
        const newProduct = { ...product, quantity: selectedQuantity };
        const updatedCart = [...cart, newProduct];

        setCart(updatedCart);
        setClonedProduct(updatedCart);
        setQuantityProducts({
            ...quantityProducts,
            [product.id]: selectedQuantity
        });
    }
};

    const handleChangeQuantity = (productId, selectedQuantity) =>{
        const newQuantities={...quantityProducts, [productId] :selectedQuantity}
        setQuantityProducts(newQuantities)
    } 

    useEffect(()=>{
        const time = setTimeout(()=>{
            setLoading(false)
        },1000)

        return ()=> clearTimeout(time)
    },[])


 return (
     <React.Fragment>
        <Header/>
        <DataProvider>
            <Category 
                onSelect={handleCategorySelect}
            />
        {loading ? (
            <Empty/>
        ):(
            <>
                <Cart 
                    onToggle={()=>{setOpenModal((state)=>!state)}}
                    count={cart.length}    
                >
                {openModal && (
                    <ProductsAddCart
                        cartItem={clonedProduct}
                        quantity={quantityProducts}
                    />
                )}
                </Cart>
                <User/>
                <InputSearch />
                <ListProducts 
                    showDetails={showDetails}
                    selectedCategory={categories}
                    addCart={addCart}
                />
                {details && <Modal product={details}
                    onClose={()=>setDetails(null)}
                    addCart={addCart}
                    onQuantity={handleChangeQuantity}
                />}
            </>
        )}
                
        </DataProvider>
     </React.Fragment>
 )
}

export default App

