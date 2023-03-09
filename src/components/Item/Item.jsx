import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Item = ({item}) => {

    const {darkMode} = useDarkModeContext()

    return (
        <>
            <div className="card cardProducto border-light" style={{width: '18rem'}}>
                <img src= {item.img} className="card-img-top" alt= {`imagen de ${item.nombre}`} />
                <div className={`card-body ${darkMode ? "cardBodyDark" : "cardBody"}`}>
                    <h5 className="card-title">{item.nombre} {item.formato}</h5>
                    <p className="card-text">{item.marca}</p>
                    <p className="card-text">U$D ${new Intl.NumberFormat('de-DE').format(item.precio)} </p>
                    <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-dark">Ver Producto</button></Link>
                </div>
            </div>
        </>
        
    );
}

