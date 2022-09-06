import React from "react";
import Navbar from "./Components/NavBar/NavBar"
import MiComponente from "./Components/MiComponente";
import Usuarios from "./Components/Usuarios";
//import ItemListContainer from "./Containers/ItemListContainer/ItemListContainer";
//import './App.css';


const App = () => {



  const mensaje = "Hola, bienvenidos!";

  return (
    <>
      <Navbar mensaje={mensaje} />
      {/* <MiComponente/>
      <Usuarios/> */}
    </>
  )
}

export default App