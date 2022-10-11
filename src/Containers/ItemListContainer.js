import React, { useEffect, useState } from "react";
//import { products } from "../Components/Products";
import { ItemList } from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
//import { LegendToggleRounded } from "@mui/icons-material";


export const customFetch =(products)=>{
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(products)
    },2000)
    
})

}

const ItemListContainer = ({greeting}) =>{

    let {IdCat} = useParams();
    const [listProducts, setListproducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    

    useEffect(()=>{
        
        //Firebase

        let productosCollection = collection(db, 'productos');

        if(IdCat){
            productosCollection = query(productosCollection, where('categoria', '==', IdCat))
        }


        getDocs(productosCollection)
        .then((data)=>{
            const listaProductos = data.docs.map((producto)=>{
                return {
                    ...producto.data(),
                    id: producto.id
                }
            })
            setListproducts(listaProductos)
        })
        .catch(()=>{
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        }
            
        )
        

},[IdCat])

return(
    <>
    <h2 style={styles.greetingText}>{greeting}</h2>
    {loading ?
    <LinearProgress color="inherit"/>
    : error ?
    <h2>Ocurrio un error!</h2>
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