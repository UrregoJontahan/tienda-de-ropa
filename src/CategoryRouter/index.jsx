import React, { useEffect, useState } from "react";
import { Category } from "../Categories/Category";
import { singleCategory } from "../Api";
import { useParams } from "react-router-dom";
import { categoriesApi } from "../Api";

function CategoryRouter( {onSelect} ){

    const {selected} = useParams()
    const [categories, setCategories] = useState([])
    const [ categorySelected , setCategorySelected ] = useState([])

    useEffect(()=>{
        fetchCategories()
        if( selected){
            fetchCategory(selected)
        }
    },[selected]);

    const fetchCategories = async () =>{
        const allCategories = await categoriesApi()
        setCategories(allCategories)
    }

    const fetchCategory = async(selectedCategory) =>{
        const categoryData = await singleCategory(selectedCategory)
        setCategorySelected(categoryData)
    }

    return <Category onSelect={onSelect} categories={categories} selected={categorySelected} />
}

export{ CategoryRouter }