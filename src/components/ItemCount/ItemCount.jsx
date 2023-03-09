import { useState } from "react";
export const ItemCount = ({ValorInicial, stock, onAdd, textBoton}) => {
    
    const [contador, setContador] = useState(ValorInicial) // defino un estado con valor inicial 1
    
    
    //creamos las funciones tipo flecha de suma y resta
    const sumar= () => contador < stock && setContador (contador + 1)
    const restar= () => contador > ValorInicial && setContador (contador - 1)
    console.log(contador)
    return (
        <div>
            <button className="btn btn-dark" onClick={()=> restar()}>-</button>
            {(contador)}
            <button className="btn btn-dark" onClick={()=> sumar()}>+</button>
            <button className="btn btn-light" onClick={()=> onAdd(contador)}>{textBoton}</button>
        </div>
    )
}