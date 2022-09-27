import React from 'react'
import {Link} from "react-router-dom";

export const Nav = ({ categorias }) => {
    return (
        <nav>
            {categorias.map((categoria) => {
                return <Link key={categoria.id} style={styles.links} to={categoria.ruta}>{categoria.nombre}</Link>
            })}
        </nav>
    )
}

const styles = {
    links: {
        padding: 10,
    }
}