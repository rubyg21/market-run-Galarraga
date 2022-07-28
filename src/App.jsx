import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'




function App() {

  return (
    <> 
    <div className="App">

      <NavBar />   
      {/* <ItemListContainer /> */}

      <ItemDetailContainer />

      
    </div>

    </>
  )
}

export default App



// {data.length === 0 ? ( <Spinner /> ) : (  <ItemDetail  data={data} /> ) }