import React from 'react'
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";



const Item = ({product})=>{
    console.log(product.id);
    return(
        <>
        <div style={styles.card}> 
            <h2 style={styles.title}>{product?.name}</h2>
            <img style={styles.img} src={product?.img} alt="" />
            <div  style={styles.itemCard}>
                <h3 style={styles.cardText}>Precio: $ {product?.price}</h3>
                <p style={styles.cardText}>Stock: {product?.stock} unidades.</p>
                <Link style={styles.link} to={`/detalleproducto/${product.id}`}>
                    <Button variant="contained" color="success">Ver Detalle</Button>
                </Link>               
            </div>                      
        </div>
        </>
    )
}


const styles ={
    title:{
        color: '#3d9915',
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    card:{
        display: 'inline-block',
        //alignItems:'center',
        // justifyContent: 'space-around',
        margin:'10px',
        width: '250px',
        border: '2px solid #dbfbde',
        borderRadius:10,
        marginBottom: 25
    },
    
    img:{
        display: 'block',
        // alignItems:'center',
        // justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '200px'
    },
    link:{
        textDecoration: 'none'
    },
    cardText:{
        display: 'flex',
        //alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin:'1%',
        padding: '2%',
        fontFamily: 'Ubuntu-Regular'

    },
    itemCard:{
        display: 'block',
        background: '#dbfbde',
        padding: 10,
        textAlign:'center',
        borderRadius:10
    }
}


export  {Item}  