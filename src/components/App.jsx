import './App.css'; //importamos y ejecutamos

/*
  class => className
  <input type="text"> => <input type="text"/>
  style ="nombrePropiedad: valor" => style = {{"nombrePropiedad" : "valor"}}
  `${}` => {}
  mayor parte de atributos son en CamelCase
  export => importo con llaves
  export default => importo sin llaves
*/

//components
import { Navbar } from './Navbar/Navbar';
import { CartWidget } from './CartWidget/CartWidget';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemCount } from './ItemCount/ItemCount';


export const App= () => {
  //<NombreComponente/>
  return (
    //aqui colocamos el codigo, pero antes de hacerlo debemos pasarlo de html-css a jsx
    <div>
      <Navbar valor={"DMD"}/> 
      <CartWidget cantCarrito={5}/>
      <ItemListContainer greeting={2}/>
      <ItemCount ValorInicial={1} stock={10}/>
    </div>

  )
}
