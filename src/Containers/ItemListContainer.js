import React, { useEffect, useState } from "react";
import { products } from "./Products";
import { ItemList } from "./ItemList";


export const customFetch =(products)=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(products)
    },2000)
    
})

}

const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListproducts] = useState([])
    useEffect(()=>{
    customFetch(products)
        .then(res=> setListproducts(res))
},[])

return(
    <>
    <h2>{greeting}</h2>
    <ItemList listProducts={listProducts}/>
    </> 
)

}

export default ItemListContainer