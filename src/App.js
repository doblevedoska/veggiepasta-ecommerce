import React from "react";
import Navbar from "./Components/NavBar/NavBar"
// import MiComponente from "./Components/MiComponente";
// import Usuarios from "./Components/Usuarios";
import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
//import './App.css';


const App = () => {


  const landing = "Aqui están las mejores ofertas de VeggiePasta";
  const mensaje = "Hola, bienvenidos!";

  return (
    <>
      <Navbar mensaje={mensaje} />
      {/* <MiComponente/>
      <Usuarios/> */}
    
    <ItemListContainer greeting={landing}/>
    </>
  )
}

export default App