import './App.css'
import Aboutme from './components/Aboutme'
import Contactus from './components/CopmComponents/Contactus'
import Fotter from './components/Fotter'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProtfolioProjects from './components/ProtfolioProjects'

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Aboutme/>
      <ProtfolioProjects/>
      <Contactus/>
      <Fotter/>
    </>
  )
}

export default App
