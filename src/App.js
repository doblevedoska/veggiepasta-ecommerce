import React from "react";
import Navbar from "./Components/NavBar/NavBar"
// import MiComponente from "./Components/MiComponente";
// import ItemCount from "./Components/ItemCount";
// import Usuarios from "./Components/Usuarios";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
// import Swal from 'sweetalert2'
//import './App.css';


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
      <Navbar mensaje={mensaje} />
      <ItemListContainer greeting={landing}/>
      <ItemDetailContainer greeting={detalle}/>
    
    
    </>
  )
}

export default App