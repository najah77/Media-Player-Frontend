import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route , Routes } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  

  return (
    <>
      <Header/>

      <Routes>
      <Route path='/' element = {<Landingpage/>}></Route>
      <Route path='/home' element = {<Home/>}></Route>
      <Route path='/watch-history' element = {<Watchhistory/>}></Route>

      </Routes>

      <Footer/>
    </>
  )
}

export default App
