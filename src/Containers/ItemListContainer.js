import React, { useEffect, useState } from "react";
import { products } from "../Components/Products";
import { ItemList } from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';


export const customFetch =(products)=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(products)
    },2000)
    
})

}

const ItemListContainer = ({greeting}) =>{
    const [listProducts, setListproducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    customFetch(products)
        .then(res=> 
        {
            setLoading (false)
            setListproducts(res)
        })
},[])

return(
    <>
    <h2 style={styles.greetingText}>{greeting}</h2>
    {loading ?
    <LinearProgress color="inherit"/>
    :
    <ItemList listProducts={listProducts}/>
    }
    </> 
)
}

const styles ={
    greetingText:{
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    }
}


export default ItemListContainer