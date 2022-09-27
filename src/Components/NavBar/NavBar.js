
import React from 'react'
import logo from '../../Assets/Images/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Nav } from './Nav/Nav';
import {Link} from "react-router-dom";


const Navbar = ({mensaje}) => {

    const categorias = [
        { id: 0, nombre: 'Productos VeggiePasta®', ruta: '/categoria/veggiepasta'},
        { id: 1, nombre: 'Otras Pastas', ruta: '/categoria/otraspastas' },
        { id: 2, nombre: 'Pastas con glúten', ruta: '/categoria/pastasgluten' },
        { id: 3, nombre: 'Acompañamientos', ruta: '/categoria/acompanamientos' },
    ]

    return (
        <header style={styles.container}>
            <Link to="/">
                <img width="250" src={logo} alt="logo" />
            </Link>
            <h3>{mensaje}</h3>
            <Nav categorias={categorias}/>
            <Link to="/cart">
                <CartWidget />
            </Link>
            
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
        fontSize: '100%',
        border: '1px solid #3d9915',
        borderRadius: 10,
        alignItems: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    // imagen: {
    //     width: '20%',
    // },
}

export default Navbar