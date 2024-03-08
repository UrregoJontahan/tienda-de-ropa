import React, { useContext, useEffect, useState } from "react";
import "./listProducts.css"
import { DataContext } from "../Provider";
import TruncateText from "../truncateTitle";
import { Link, useParams } from "react-router-dom";
import { useGetProductsApi, getProductsByCategory } from "../Api";

function ListProducts({ showDetails, addCart }){ 

    const {setActiveCategory} = useContext(DataContext)
    const [productsList, setProductsList] = useState([])
    const { categorie } = useParams()

    useEffect(()=> {
        getProducts(categorie)
    }, [categorie])

    useEffect(()=>{
        setActiveCategory(categorie)
    }, [categorie])

    const getProducts = async (category) => {
        if(category) {
            let result = await getProductsByCategory(category)
            setProductsList(result)
        }else{
            const list = await useGetProductsApi()
            setProductsList(list)
        }
    }

    const handleProductClick = (product) => {
        showDetails(product);
    };

    return(
        <div className="container-images">
            {productsList.map((product)=>(
                <Link to={`/AddCart/${product.id}`} className="card"
                    key={product.id}
                >
                    <img  
                        className="images-producs"
                        src={product.image}
                        onClick={()=>handleProductClick(product)}
                    />
                    <div className="container-title">
                        <div className="title-product">
                            <div className="tooltiptext">{product.title}</div>
                            <TruncateText text={product.title}  maxLength={10}/>
                        </div>
                    </div>
                    <div className="price">
                        {"Price: "+"$" + product.price}
                    </div>
                    <button
                        className="add-cart"
                        onClick={()=>addCart(product, 1)}
                    >
                        <p className="text">Agregar al carrito</p> 
                    </button>
                </Link>
            ))}
        </div>
    )
}

export { ListProducts }
