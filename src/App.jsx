import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Page/Home'
import NavBar from './components/navbar/Navbar'
import About from "./components/Page/About"
import Planning from './components/page/Planning'
import Equipe from './components/page/Equipe'
import Sponsors from './components/page/Sponsors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Planning/>
      <Equipe/>
      <Sponsors/>
    </>
  )
}

export default App
