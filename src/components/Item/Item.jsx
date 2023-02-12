import { Link } from "react-router-dom";
export const Item = ({item}) => {
    return (
        <>
            <div className="card cardProducto border-light" style={{width: '18rem'}}>
                <img src= {`./assets/img/${item.img}`} className="card-img-top" alt= {`imagen de ${item.nombre}`} />
                <div className="card-body cardBody">
                    <h5 className="card-title">{item.nombre} {item.formato}</h5>
                    <p className="card-text">{item.marca}</p>
                    <p className="card-text">U$D{item.precio}</p>
                    <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
                </div>
            </div>
        </>
        
    );
}

