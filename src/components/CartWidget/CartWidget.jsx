export const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            {/* en ves de que diga carrito le agregamos un icono */}
            <button className="btn btn-light">Carrito</button>
            <p>{cantCarrito}</p>
        </div>
    );
}


