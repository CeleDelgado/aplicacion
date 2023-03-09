import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useDarkModeContext } from "../../context/DarkModeContext" 
import { useCarritoContext } from "../../context/CarritoContext"
export const ItemDetail = ({prod}) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => { //agregar producto carrito
        addItem(prod, cantidad) 
    }
    return (
                <div className="row g-0 cardDetail">
                    <div className="col-md-4">
                        <img src={prod.img} className="img-fluid rounded-start" alt= {`imagen de ${prod.nombre}`} />
                    </div>
                    <div className="col-md-8">
                        <div className={`card-body ${darkMode && "itemDetailBodyDark"}`}>
                            <h5 className="card-title"> {prod.nombre}</h5>
                            <p className="card-text">Formato: {prod.formato}</p>
                            <p className="card-text">Marca: {prod.marca} </p>
                            <p className="card-text">Precio: U$D ${new Intl.NumberFormat('de-DE').format(prod.precio)} </p>
                            <p className="card-text">Stock: {prod.stock} </p>
                            <ItemCount ValorInicial= {1} stock={prod.stock} onAdd={onAdd} textBoton="Agregar al carrito"/>
                            <p className="card-text">Tamaño: {prod.tamanio} </p>
                            <p className="card-text">Descripción: {prod.descripcionCorta} </p>
                            <p className="card-text">Tiempo de entrega: {prod.tiempoDeEntrega} </p>
                            <p className="card-text">Número de revisiones: {prod.nroDeRevisiones} </p>
                            <Link className="nav-link" to={'/cart'}><button className="btn btn-dark">Finalizar compra</button></Link>
                            
                        </div>
                    </div>
                </div>

    )
}


