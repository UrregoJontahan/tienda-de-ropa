import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { DataProvider } from './Provider';
import { Header } from './Header';
import { InputSearch } from './Search';
import { ListProducts } from './ListProducts';
import { User } from './Users';
import { Cart } from './AddCart';
import { ProductsAddCart } from './ProductsSElected/ProductsAdd';
import { Empty } from './EmptyProducst';
import { useEffect } from 'react';
import { DataUser } from './Users/DataUser';
import { ModalRouter } from './ModalRouter';
import { Category } from './Categories/Category';
function App() {
    const [details, setDetails] = useState(null);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openDataUser, setOpenDataUser] = useState(false)
    const [clonedProduct, setClonedProduct] = useState([]);
    const [quantityProducts, setQuantityProducts] = useState({});
    const [loading, setLoading] = useState(true);

    const showDetails = (product) => {
        setDetails(product);
    };

    const handleCategorySelect = (category) => {
        setCategories(category);
        ("click en", category);
    };


    const handleClickRemoveProduct = (product) =>{
        const updatedCart = cart.filter(item => item.id !== product);
        setClonedProduct(updatedCart);
        setCart(updatedCart)
    }

    const addCart = (product, selectedQuantity) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += selectedQuantity;

            setCart(updatedCart);
            setClonedProduct(updatedCart);
            setQuantityProducts({
                ...quantityProducts,
                [product.id]: updatedCart[existingProductIndex].quantity,
            });
        } else {
            const newProduct = { ...product, quantity: selectedQuantity };
            const updatedCart = [...cart, newProduct];

            setCart(updatedCart);
            setClonedProduct(updatedCart);
            setQuantityProducts({
                ...quantityProducts,
                [product.id]: selectedQuantity,
            });
        }
    };

    const handleChangeQuantity = (productId, selectedQuantity) => {
        const newQuantities = { ...quantityProducts, [productId]: selectedQuantity };
        setQuantityProducts(newQuantities);
    };

    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(time);
    }, []);

    return (
            <React.Fragment>
                <DataProvider>
                    <Cart onToggle={() => setOpenModal((state) => !state)} count={cart.length}>
                        {openModal && (
                            <ProductsAddCart cartItem={clonedProduct} quantity={quantityProducts} 
                                onRemove={handleClickRemoveProduct}
                            />
                            )}
                    </Cart>
                    <User ontoggleUser={() => setOpenDataUser((state) => !state)}>
                        {openDataUser && (
                            <DataUser/>
                        )}
                    </User>
                    <InputSearch />
                    
                    {loading ? (
                        <Empty />
                        ) : (      
                            <BrowserRouter>
                                    <Header/>
                                    <Category onSelect={handleCategorySelect}/>
                                <Routes>
                                    <Route 
                                        path='/:categorie?' 
                                        element={ <ListProducts showDetails={showDetails} selectedCategory={categories} addCart={addCart} />}/>
                                    <Route 
                                        path='AddCart/:id' 
                                        element={<ModalRouter
                                        addCart={addCart} 
                                        onQuantity={handleChangeQuantity} />}
                                    />

                                </Routes>
                            </BrowserRouter>
                    )}
                </DataProvider>
            </React.Fragment>
    );
}

export default App;