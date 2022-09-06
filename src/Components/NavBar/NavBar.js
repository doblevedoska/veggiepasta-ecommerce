
import React from 'react'
import logo from '../../Assets/Images/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Nav } from './Nav/Nav';


const Navbar = ({mensaje}) => {

    const categorias = [
        { id: 0, nombre: 'Historia' },
        { id: 1, nombre: 'Productos' },
        { id: 2, nombre: 'Recetas' },
        { id: 3, nombre: 'Contacto' },
    ]

    return (
        <header style={styles.container}>
            <img style={styles.imagen} src={logo} alt="logo" />
            <h2>{mensaje}</h2>
            <Nav categorias={categorias}/>
            <CartWidget />
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#dbfbde',
        padding: '1%',
        margin:'1%',
        fontSize: '130%',
        border: '1px solid #3d9915',
        borderRadius: 10,
        alignItems: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    imagen: {
        width: '20%',
    },
}

export default Navbar