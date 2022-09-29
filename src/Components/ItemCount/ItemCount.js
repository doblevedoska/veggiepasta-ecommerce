import React,{useState} from 'react'
import { Button } from '@mui/material'
import Swal from 'sweetalert2'

const ItemCount =({stock, incial, onAdd}) => {
    

const [contador,setContador]=useState(1);


    const sumar =() => {
        // const resultado = contador - stock;
        // console.log(resultado);
        (stock - contador) > 0 ? setContador(contador + 1) : Swal.fire(`No hay mas stock!`);
        
    }

    const restar =() => {
        (contador) > 1 ? setContador(contador - 1) : Swal.fire(`Al menos debe haber un ítem para agregar!`);
    }
    const agregar =() => {
        onAdd(contador);
    }

    return (
        <> 
        <div style={styles.card}> 
        <h3 style={styles.cardText}>ItemCount</h3>
        <div style={styles.itemCard}>
            <Button style={styles.itemSymbol} variant="contained" size="large" onClick={restar}>-</Button>
            <h2 style={styles.itemSymbol}> {contador}</h2>
            <Button style={styles.itemSymbol} variant="contained" size="large" onClick={sumar}>+</Button>
        </div>
        <div style={styles.itemCard}>
            <Button variant="contained" onClick={agregar}>Agregar al Carrito</Button>
            
        </div>
        <p style={styles.cardText}>(Stock: {stock})</p>
        </div>
        </>
    )
}
    const styles = {
        card: {
            display: 'block',
            margin: '0 auto',
            border: '1px solid #ccc',
            borderRadius: 10,
            width : '250px',
            padding: '1%',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Ubuntu-Regular'
        },
        cardText:{
            display: 'flex',
            color: '#6c757d',
            alignItems: 'center',
            justifyContent: 'center'
        },
        itemCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        itemSymbol: {
            padding: '4%',
        },
    }

export default ItemCount