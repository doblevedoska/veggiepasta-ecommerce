import React from "react";
import emptyCart from '../../Assets/Images/empty_cart.png'
import { useCartContext } from "../../Context/CartContext";
import { ItemCart } from "./ItemCart";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
// import { db } from "../../firebase/firebase";
// import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"

export const Cart = () => {
  const { cart, PrecioTotal, clear } = useCartContext();



  if (cart.length === 0) {
    return (
      <>
        <div style={styles.empty}>
          <img width="250" src={emptyCart} alt="emptyCart" />
          <p>No existen aun productos en el carrito!</p>
          <Link style={styles.link} to="/">
            <Button variant="contained" color="success">Volver</Button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <h2 style={styles.total}>Total a abonar: ${PrecioTotal()}</h2>
      <Link style={styles.link} to="/">
        <Button variant="contained" color="success">Agregar mas productos</Button>
      </Link>
      <Link style={styles.link} to="/">
        <Button onClick={clear} variant="contained" color="success">Vaciar Carrito</Button>
      </Link>
      <Link style={styles.link} to="/form">
        <Button variant="contained" color="success">Finalizar Compra</Button>
      </Link>
    </>
  );
};

//Estilos Cart

const styles ={
  link:{
      display: 'flex',
      justifyContent: 'center',
      textDecoration: 'none',
      margin: '20px',
      alignItems: 'center'
  },
  empty:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20px',
    },
  total:{
    color: '#3d9915',
    padding: '1%',
    paddingLeft: '10px',
    fontFamily: 'Ubuntu-Regular',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    width: '300px',
    border: '2px solid #dbfbde',
    borderRadius:10,
    marginTop: 25
  }
  
}