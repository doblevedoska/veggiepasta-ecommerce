import React, { useEffect, useState } from "react";
//import { products } from "../Components/Products";
import { ItemDetail } from "../Components/ItemDetail";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

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
    const [error, setError] = useState(false);
    let {IdProd} = useParams();



    useEffect(()=>{
        const productosCollection = collection(db, 'productos');
        const refDoc = doc(productosCollection, IdProd);
        getDoc(refDoc)
        .then((resultado)=>{
            setProducto(
                {
                    id:resultado.id,
                    ...resultado.data(),
                }
            )
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })

    },[IdProd]);



return(
    <>
    <h2 style={styles.detalleText}>{greeting}</h2>
    {loading ?
    <LinearProgress color="inherit"/>
    : error ?
    <h2>Ocurrio un error!</h2>
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