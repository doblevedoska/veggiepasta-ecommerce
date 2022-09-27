import React, { useEffect, useState } from "react";
import { products } from "../Components/Products";
import { ItemList } from "../Components/ItemList";
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
//import { responsiveFontSizes } from "@material-ui/core";


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

    useEffect(()=>{
    customFetch(products)
        .then(res=> 
        {
            if(IdCat){
                setLoading (false)
                setListproducts(res.filter(productos => productos.categoria === IdCat))

            }
            else{
                setLoading (false)
                setListproducts(res)
            }

        })
},[IdCat])

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