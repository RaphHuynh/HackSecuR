import './App.css'
import Home from './components/page/Home'
import NavBar from './components/navbar/Navbar'
import About from './components/page/About'
import Planning from './components/page/Planning'
import Equipe from './components/page/Equipe'
import Sponsors from './components/page/Sponsors'
import NavNetwork from './components/navbar/navNetwork'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Planning/>
      <Equipe/>
      <Sponsors/>
      <NavNetwork/>
    </>
  )
}

export default App
