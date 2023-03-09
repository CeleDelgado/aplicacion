import { Link } from "react-router-dom";
import React from "react";
export const Categories = React.memo (() => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle btn btn-outline-light" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={'/category/logo'}>Logos</Link></li>
                        <li><Link className="dropdown-item" to={'/category/flyer'}>Flyers</Link></li>
                        <li><Link className="dropdown-item" to={'/category/banner'}>Banners</Link></li>
                        <li><Link className="dropdown-item" to={'/category/publicidad'}>Publicidad</Link></li>
                        <li><Link className="dropdown-item" to={'/category/disenioEditorial'}>Diseño Editorial</Link></li>
                        <li><Link className="dropdown-item" to={'/category/dibujo'}>Dibujos</Link></li>
                        <li><Link className="dropdown-item" to={'/category/personajeAnimado'}>Personajes Animados</Link></li>
                        <li><Link className="dropdown-item" to={'/category/marca'}>Marcas</Link></li>
                        <li><Link className="dropdown-item" to={'/category/eslogan'}>Eslogans</Link></li>

                    </ul>
            </li>
        </div>
    );
})
