import { CartWidget } from "../CartWidget/CartWidget";
import { Categories } from "./Categories/Categories";
import { Sections } from "./Sections/Sections";

export const Navbar = ({nombre}) => {
    return (
        <>
        {/* agremos un logo pequeño,  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* aca podedmos agregar el logo del proyecto */}
                    <a className="navbar-brand" href="#">{nombre}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <Sections/>
                        <Categories/>
                    </ul>
                    <CartWidget cantCarrito={10}/>
                    </div>
                </div>
            </nav>
        </>
    );
}

