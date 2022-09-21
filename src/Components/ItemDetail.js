// import React from 'react'


const ItemDetail = ({producto})=>{
    
    return(
        <>
        <div style={styles.card}> 
            <h2 style={styles.title}>{producto.title}</h2>
            <img style={styles.img} src={producto.image} alt="" />
            <div  style={styles.itemCard}>
                <h3 style={styles.cardText}>Precio: $ {producto.price}</h3>
                <p style={styles.cardText}>Descripción: {producto.description} unidades.</p>
            </div>
                        
        </div>
        </>
        
    )
}

const styles ={
    title:{
        color: '#3d9915',
        textAlign: 'center',
        fontFamily: 'Ubuntu-Regular'
    },
    card:{
        display: 'inline-block',
        // alignItems:'center',
        // justifyContent: 'space-around',
        margin:'10px',
        width: '250px',
        border: '2px solid #dbfbde',
        borderRadius:10,
        marginBottom: 25
    },
    
    img:{
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        width: '250px'
    },
    cardText:{
        display: 'flex',
        //alignItems:'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin:'1%',
        padding: '2%',
        fontFamily: 'Ubuntu-Regular'

    },
    itemCard:{
        display: 'block',
        background: '#dbfbde',
        padding: 10,
        textAlign:'center',
        borderRadius:10
    }
}


export  {ItemDetail}  