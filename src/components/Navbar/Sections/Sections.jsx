import { Link } from "react-router-dom";
import React from "react";
export const Sections = React.memo (() => {
    return (
        <>
            <li className="nav-item">
            <Link className="nav-link" to={'/'}><button className="btn btn-outline-light">Inicio</button></Link>
            </li>

            <li className="nav-item">
            <button className="btn btn-outline-dark">Nosotros </button>
            </li>

            <li className="nav-item">
            <button className="btn btn-outline-dark">Contacto </button>
            </li>
        </>
    );
})

