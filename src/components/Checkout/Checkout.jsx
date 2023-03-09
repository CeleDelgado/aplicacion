import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useCarritoContext} from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import { createOrdenCompra, updateProducto, getProducto} from "../../utils/firebase"
export const Checkout = () => {
    const { carrito, emptyCart, totalPrice}= useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        const data= new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)
        
        if(cliente.email!==cliente.repetirEmail){
            toast.error("Verifique su email ingresado para continuar", {
                icon: false
            });
            e.target.reset() //hacemos un reseteo del form
            emptyCart() //vacio el carrito, limpiamos el formulario
        }//aca tengo el error de que parece que efectua la orden de compra, no se como evitar que se genere

        const aux= [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //descuento el stock
                updateProducto(prodBDD.id, prodBDD)// actualizo, enviando el id  el producto actualizado
            }) 
        })
        //creo la orden de compra del usuario
        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`Gracias por su compra! Su orden de compra posee el id ${ordenCompra.id}, por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())}, fué realizada con exito`)
            //formateamos para: que el punto vaya para miles y la coma para decimales
            e.target.reset() //hacemos un reseteo del form
            emptyCart() //vacio el carrito
            navigate("/") //navego a mi pagina inicial
        })

    }

    return (

        <>
            {carrito.length===0
                ?
                <>
                    <h2>Carrito vacio: para finalizar la compra debe ingresar al menos un producto</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container contForm">       
                    <form onSubmit={consultarForm} ref={datosForm}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="nombreApellido" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="email" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Repetir Email</label>
                        <input type="text" className="form-control" name="repetirEmail" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="documento" className="form-label">Documento</label>
                        <input type="text" className="form-control" name="documento" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Número telefonico</label>
                        <input type="text" className="form-control" name="telefono" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                    </form>
                </div>
            } 
        </>
    );
}

