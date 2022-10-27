import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { useCartContext } from "../../../Context/CartContext";
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';


export const SalesForm = () => {

const { cart, PrecioTotal, clear } = useCartContext();
const [inputValues, setInputValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    adress: "",
    flat: "",
});
const total = PrecioTotal();

const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
};

const finalSale = (e) => {
    e.preventDefault();
    console.log("se ejecuto el pagar compra");
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
    usuario: inputValues,
    items: cart,
    date: serverTimestamp(),
    total,
    }).then((res) => {
    clear();
    // Swal.fire(`Gracias por su compra! :)`);
    Swal.fire({
        icon: 'success',
        text: 'Muchas gracias por tu compra!',
        footer: '<a href="/">Seguir comprando</a>',
        showConfirmButton:false
      })
    });
};

return (
    <>
    <h1>Usted debera abonar: $ {PrecioTotal()} </h1>
    <h2>Ingrese sus datos para realizar el envio</h2>
    <div>
        <form>
        <input
            name="name"
            type="name"
            placeholder="Nombre"
            onChange={handleOnChange}
        />
        <input
            name="surname"
            type="family-name"
            placeholder="Apellido"
            onChange={handleOnChange}
        />
        <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleOnChange}
        />
        <input
            name="phone"
            type="tel"
            placeholder="Telefono"
            onChange={handleOnChange}
        />
        <input
            name="adress"
            type="street-address"
            placeholder="Direccion"
            onChange={handleOnChange}
        />
        <input
            name="flat"
            type="text"
            placeholder="Departamento"
            onChange={handleOnChange}
        />
        <Button onClick={finalSale} variant="contained" color="success">Pagar Compra</Button>
        </form>
    </div>
    </>
);
};
