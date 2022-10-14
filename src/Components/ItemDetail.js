// import React from 'react'
import Button from '@mui/material/Button';
import { useState } from "react";
import  ItemCount  from "../Components/ItemCount/ItemCount";
import  { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
// import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


export const ItemDetail = ({producto})=>{

    const [irAlCarrito, setIrAlCarrito] = useState (false); 

    // const onAdd = () => {setIrAlCarrito(true)};
    const { addItem } = useCartContext();
    const onAdd = (cantidad) => {
        setIrAlCarrito(true);
        addItem(producto, cantidad);
        // Toastify({
        //   text: `Usted a agregado ${cantidad} unidades de ${producto.name}.`,
        //   duration: 3500,
        // }).showToast();
    };
    
    return(
        <>
        <div style={styles.card}>
        <div style={styles.cardLeft}> 
            <img style={styles.img} src={producto.img} alt="" />                   
        </div>
        <div  style={styles.cardRight}>
            <h2 style={styles.title}>{producto.name}</h2>
            <p style={styles.cardDesc}>Descripción: {producto.description}.</p>
            <h3 style={styles.cardPrice}>Precio: $ {producto.price}</h3>
            {
            irAlCarrito
            ? <>
                <Link style={styles.link} to='/cart'><Button variant="contained" color="success">Ver Carrito</Button></Link>
                <Link style={styles.link} to="/">
                    <Button variant="contained" color="success">Agregar mas productos</Button>
                </Link>
            </>  
            :<ItemCount inicio={1} stock={producto.stock} onAdd={onAdd} />

            }
            

        </div>

        </div>

        </>
        
    )
}

const styles ={
    title:{
        color: '#3d9915',
        padding: '2%',
        fontFamily: 'Ubuntu-Regular'
    },
    cardLeft:{
        display: 'inline-block',
        // alignItems:'center',
        // justifyContent: 'space-around',
        margin:'10px',
        width: '250px',
        marginBottom: 25
    },
    card:{
        display: 'flex',
        margin: '0 auto',
        width: '800px',
        border: '2px solid #dbfbde',
        borderRadius:10,
        marginBottom: 25
    },
    
    img:{
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems:'center',
        justifyContent: 'center',
        width: '250px'
    },
    cardDesc:{
        justifyContent: 'center',
        margin:'1%',
        padding: '2%',
        fontFamily: 'Ubuntu-Regular'

    },
    cardPrice:{
        justifyContent: 'center',
        margin:'1%',
        padding: '2%',
        fontFamily: 'Ubuntu-Regular'
    },
    link:{
        padding: "10px",
        textDecoration: 'none'
    },
    cardRight:{
        display: 'inline-block',
        background: '#dbfbde',
        padding: 10,
        textAlign:'left',
        fontSize: '120%',
        width: '550px',
        borderRadius:10
    }
}


// export  {ItemDetail}  