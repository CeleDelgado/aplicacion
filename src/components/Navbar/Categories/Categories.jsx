export const Categories = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Logos</a>
                        <a className="dropdown-item" href="#">Caricaturas</a>
                        <a className="dropdown-item" href="#">Flyers</a>
                    <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">Gifs</a>
                    </div>
            </li>
        </div>
    );
}

