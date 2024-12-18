import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

   const [categories, setCategories] = useState(['ICarly'])
    console.log(categories)
    
    const onAddCategory = (newCategory) => {
        //Si mi entrada ya está en el arreglo, no hace nada:
        if(categories.includes(newCategory)) return;
        //Una forma de hacerlo es:
        // setCategories([...categories, 'Valorant'])
        //Otra forma de hacerlo es:
        // setCategories(cat => [...categories,'Valorant'])
        // categories.push(newCategory)
        // console.log(newCategory)
        //Primero me agrega mi categoria y luego me carga todo el arreglo
        setCategories([newCategory, ...categories])
        //Primero me carga todo el arreglo y luego me agrega mi categoría
        //setCategories([...categories, newCategory])
    }

    return(
        <>
            <h1>
                GifExpertApp
            </h1>

            <AddCategory 
                onNewCategory={
                    (event) => onAddCategory (event)
                }
                currentCategories = {categories}
                // setCategories={setCategories}
            />    

            {categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                )
            )}
            
        </>
    )
}