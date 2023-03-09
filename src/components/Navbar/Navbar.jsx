import { CartWidget } from "../CartWidget/CartWidget";
import { Categories } from "./Categories/Categories";
import { Sections } from "./Sections/Sections";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";
export const Navbar = ({nombre}) => {

    const { darkMode} = useDarkModeContext()
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-primary" : "bg-light"}`}>
                <div className="container-fluid">
                    <div className="navbar-brand" >{nombre}</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <Sections/>
                            <Categories/>
                        </ul>
                        <CartWidget cantCarrito={10}/>
                        <BotonDarkMode/>
                    </div>
                </div>
            </nav>
        </> 
    ); 
}

