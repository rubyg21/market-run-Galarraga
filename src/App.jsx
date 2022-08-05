import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import Contacto from './components/Contacto'


import { BrowserRouter, Routes, Route } from 'react-router-dom'




function App() {

  return (  
    <> 
<BrowserRouter>  

      <NavBar />   

      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
          

</BrowserRouter>



      


    </>
  )
}

export default App



// {data.length === 0 ? ( <Spinner /> ) : (  <ItemDetail  data={data} /> ) }