import React, { useEffect, useState } from "react";
// import { products } from "../Components/Products";
import { ItemDetail } from "../Components/ItemDetail";
import LinearProgress from '@mui/material/LinearProgress';


const ItemDetailContainer = ({greeting}) =>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const getItem = async () => {
            try{
                const respuesta = await fetch ('https://fakestoreapi.com/products/10');
                const data = await respuesta.json();
                setProducto(data);
            }
            catch(err){
                console.error(err)
            }
            finally{
                setLoading(false)
            }

        }
        getItem();
    },[])

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
        textAlign: 'left',
        fontFamily: 'Ubuntu-Regular'
    }
}




export default ItemDetailContainer