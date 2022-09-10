import React, { useEffect, useState } from 'react'

const initialProducts = [
    {name: "Manzanas", id: 0, price: 200, stock:20},
    {name: "Peras", id: 1, price: 300, stock:10},
    {name: "Bananas", id: 2, price: 150, stock:15},
    {name: "Naranjas", id: 3, price: 100, stock:30}
]

const promesa = new Promise((res, rej)=>{
    res(initialProducts)

})

const ItemListContainer = ({greeting}) => {

const [products, setProducts] = useState([]);

    useEffect(()=>{
        console.log(promesa);
        promesa
        .then((data)=>{
            console.log(data);
            setProducts(data);

        })
        .catch(()=>{

        }
        )

    },[])


    return (
        <>
        <h1>{greeting}</h1>
        {products.map((product)=> <h2 key={product.id}></h2>)}
        </>
    )
}

export default ItemListContainer