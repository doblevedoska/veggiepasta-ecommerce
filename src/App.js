import React from "react";
import Navbar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import {Cart} from "./Containers/CartView/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./Context/CartContext";
import { SalesForm } from "./Containers/CartView/SalesForm/SalesForm";



const App = () => {


  const landing = "Aqui están las mejores ofertas de VeggiePasta";
  const mensaje = "Hola, bienvenidos! 😊";
  const detalle = "Detalle del Producto";



  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar mensaje={mensaje} />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={landing}/>}/>
            <Route path='/categoria/:IdCat' element={<ItemListContainer greeting={landing}/>}/>
            <Route path='/detalleproducto/:IdProd' element={<ItemDetailContainer greeting={detalle}/>}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/form' element={<SalesForm />}/>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App
