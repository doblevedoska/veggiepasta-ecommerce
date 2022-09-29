import React from "react";
import Navbar from "./Components/NavBar/NavBar"
// import MiComponente from "./Components/MiComponente";

// import Usuarios from "./Components/Usuarios";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import {Cart} from "./Containers/CartView/Cart";
// import Swal from 'sweetalert2'
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {


  const landing = "Aqui están las mejores ofertas de VeggiePasta";
  const mensaje = "Hola, bienvenidos! 😊";
  const detalle = "Detalle del Producto";

  // const onAdd = (contador)=>{
  //   //console.log(`Se agregaron ${contador} ítems al carrito`);
  //   Swal.fire(`Se agregaron ${contador} ítems al carrito`);
  // }



  return (
    <>
      <BrowserRouter>
        <Navbar mensaje={mensaje} />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={landing}/>}/>
          <Route path='/categoria/:IdCat' element={<ItemListContainer greeting={landing}/>}/>
          <Route path='/detalleproducto/:IdProd' element={<ItemDetailContainer greeting={detalle}/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
