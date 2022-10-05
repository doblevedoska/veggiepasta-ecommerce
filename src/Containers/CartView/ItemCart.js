import React from "react";
import { useCartContext } from "../../Context/CartContext";
import Button from '@mui/material/Button';

export const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <>
      <div style={styles.container}>
        <div style={styles.imgCard} >
          <img style={styles.img} src={product.img} alt="" /> 
        </div>
        <div style={styles.text}>
          <p>Producto: {product.name}</p>
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio unitario: $ {product.price}</p>
          <p>Subtotal: ${product.cantidad * product.price}</p>
        </div>
        <div style={styles.boton}>
          <Button variant="outlined" color="success"onClick={() => removeItem(product.id)}>
            Eliminar Producto
          </Button>
        </div>
      </div>
    </>
  );
};

const styles ={
  container:{
      display: 'flex',
      margin: '0 auto',
      width: '400px',

      border: '2px solid #dbfbde',
      borderRadius:10,
      marginBottom: 25
  },
  imgCard:{
    display: 'inline-block',
    paddingLeft: '20px'
  },
  img:{
    display: 'block',
    height: '70px'
  },
  text:{
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20px'
  },
  boton:{
    display: 'block',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center'
  }

}