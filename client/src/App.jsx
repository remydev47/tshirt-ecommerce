import { useState } from 'react'
import Canvas from './Canvas';
import Custromizer from './pages/Custromizer';
import Home from './pages/Home';


function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas />
      <Custromizer />
    </main>
  )
}

export default App
