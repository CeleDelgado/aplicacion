import './App.css'; //importamos y ejecutamos
import 'react-toastify/dist/ReactToastify.css'
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Context
import { CarritoProvider } from '../context/CarritoContext';
import { DarkModeProvider } from '../context/DarkModeContext';
//Firebase
import { getProductos } from '../utils/firebase';
//Toastify
import { ToastContainer } from 'react-toastify';
//components
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';



export const App= () => {
  //cargo los productos una vez, y luego de que esten cargados, comento esta funcion, sino los volvera a cargar
  //cargarBDD()
  getProductos()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar valor={"DMD"}/> 
              <Routes> 
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
              <ToastContainer/>
          </CarritoProvider>        
        </DarkModeProvider>
      </BrowserRouter>
    </>

  )
}
