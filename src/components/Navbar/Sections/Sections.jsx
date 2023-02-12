import { Link } from "react-router-dom";
export const Sections = () => {
    return (
        <>
            <li className="nav-item">
            <Link className="nav-link" to={'/'}><button className="btn btn-outline-light">Inicio</button></Link>
            </li>

            <li className="nav-item">
            <button className="btn btn-outline-light">Nosotros </button>
            </li>

            <li className="nav-item">
            <button className="btn btn-outline-light">Contacto </button>
            </li>
        </>
    );
}

