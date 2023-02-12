import { ItemCount } from "../ItemCount/ItemCount"
export const ItemDetail = ({prod}) => {
    return (

                <div className="row g-0 cardDetail">
                    <div className="col-md-4">
                        <img src= {`../assets/img/${prod.img}`} className="img-fluid rounded-start" alt= {`imagen de ${prod.nombre}`} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"> {prod.nombre}</h5>
                            <p className="card-text">Formato: {prod.formato}</p>
                            <p className="card-text">Marca: {prod.marca} </p>
                            <p className="card-text">Precio: U$D{prod.precio} </p>
                            <p className="card-text">Stock: {prod.stock} </p>
                            <ItemCount ValInicial= {1} stock={prod.stock}/>
                            <p className="card-text">Tamaño: {prod.tamanio} </p>
                            <p className="card-text">Descripción: {prod.descripcionCorta} </p>
                            <p className="card-text">Tiempo de entrega: {prod.tiempoDeEntrega} </p>
                            <p className="card-text">Número de revisiones: {prod.nroDeRevisiones} </p>
                            <button className="btn btn-dark">Finalizar compra</button>
                        </div>
                    </div>
                </div>

    )
}


