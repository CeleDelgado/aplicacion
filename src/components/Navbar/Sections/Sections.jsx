export const Sections = () => {
    return (
        <>
            <li className="nav-item">
            <a className="nav-link active" href="#"><i className="bi bi-house"/>Inicio
            <span className="visually-hidden">(current)</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-person-exclamation"/> Acerca de nosotros</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><i className="bi bi-person-workspace"/> Contacto</a>
            </li>
        </>
    );
}

