import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'


const Item = ({product})=>{
    return(
        <>
        <div style={ styles.card}> 
            <h2 style={styles.title}>{product?.name}</h2>
            <img width='200' height='200' src={product?.img} alt="" />
            <div  style={styles.itemCard}>
                <h3 style={styles.cardText}>Precio: $ {product?.price}</h3>
                <p style={styles.cardText}>Stock: {product?.stock} unidades.</p>
            </div>
        </div>
        </>
    )
}
const styles ={
    title:{
        color: '#3d9915',
        textAlign: 'center'
    },
    card:{
        display: 'block',
        alignItems:'center',
        justifyContent: 'space-between',
        margin:'2%',
        fontSize: '150%',
        width: '300px',
        border: '2px solid #dbfbde',
        borderRadius:10
    },
    
    img:{
        display: 'block',
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    cardText:{
        display: 'block',
        alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin:'1%',
        padding: '2%',

    },
    itemCard:{
        background: '#dbfbde',
        padding: 10,
        alignText:'center',
        borderRadius:10
    },
    Symbol: {
        padding: '6%',
    },
    
}


export  {Item}  