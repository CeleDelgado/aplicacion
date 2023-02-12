import './App.css'; //importamos y ejecutamos
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';


export const App= () => {
  return (
    <>
      <BrowserRouter>
        <Navbar valor={"DMD"}/> 
        <Routes> 
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>

  )
}
