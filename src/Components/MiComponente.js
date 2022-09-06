import React,{useState} from 'react'

const MiComponente =() => {
    

const [contador,setContador]=useState(0);

    const sumar =() => {
        setContador(contador +1);

    }

    const restar =() => {
        setContador(contador - 1);

    }
    const reset =() => {
        setContador(0);

    }

    return (
        <> 
        <div> MiComponente</div>
        <h1> {contador}</h1>
        <button conClick={sumar}>sumar</button>
        <button conClick={restar}>restar</button>
        <button conClick={reset}>reset</button>
        </>
    )
}
export default MiComponente