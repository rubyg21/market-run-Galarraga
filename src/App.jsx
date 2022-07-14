import { useState } from 'react'

import './App.css'

import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <p> Tienda de articulos de running...</p>
      <NavBar />   
       


    </div>
  )
}

export default App
