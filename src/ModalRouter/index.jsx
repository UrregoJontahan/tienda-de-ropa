import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../Api";


function ModalRouter({ addCart, onQuatity}){
    const {id} = useParams()
    const [details , setDetails] = useState(null)

    useEffect(()=>{
        fetchDetailsProductsId()
    },[id])

    const fetchDetailsProductsId = async() =>{
        const detailsProduct = await getSingleProduct(id)
        setDetails(detailsProduct)
    }

    return <Modal product={details} addCart={addCart} onQuantity={onQuatity}/>

}

export{ ModalRouter }