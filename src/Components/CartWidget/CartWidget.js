import React from "react";
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useCartContext } from "../../Context/CartContext";

export const CartWidget = () => {
  const { ProdTotal } = useCartContext("");

  return (
    <>
      <div style={styles.container}>
        <div style={styles.prod}>{ProdTotal() || ""}</div>
        <ShoppingCartTwoToneIcon fontSize="large" sx={{ color: "#6c757d" }} />
      </div>
    </>
  );
};

const styles ={
  container:{
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '10px',
    position: 'static'
  },
  prod:{
    // display: 'flex',
    // color: 'white',
    // fontSize: '15px',
    // border: 'none',
    // textDecoration: 'none',
    // backgroundColor: 'red',
    // borderRadius: '25px',
    // width: '20px',
    // height: '20px',
    // position: 'relative',
    // top: '15px',
    // margin: '0 auto'
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontSize: '15px',
    border: 'none',
    backgroundColor: 'red',
    borderRadius: '25px',
    width: '20px',
    position: 'relative',
    top: '10px'
  }
}

