import React, { useEffect, useState } from "react";
import { products } from "../Components/Products";
import { ItemDetail } from "../Components/ItemDetail";

import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";

export const customFetch =(products, id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const product = products.find((product) => product.id === id)
            resolve(product)
        },2000)
        
    })
}

const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    let {IdProd} = useParams();

    // useEffect(() => {
    //     customFetch(products, IdProd)
    //         .then(resolve=> 
    //             {
    //                 setProducto(producto);
    //                 setLoading (false)
    //                 console.log(producto);}
    //             }
    // },[]);

    useEffect(()=>{
        customFetch(products, parseInt(IdProd))
            .then(resolve=> 
            {
                setLoading (false)
                setProducto(resolve);
                // console.log(resolve);
            })
    },[]);



return(
    <>
    <h2 style={styles.detalleText}>{greeting}</h2>
    {loading ?
    <LinearProgress color="inherit"/>
    :
    <ItemDetail producto={producto}/>
    
    }
    
    </> 
)
}

const styles ={
    detalleText:{
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    }
}




export default ItemDetailContainer