import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componnent/Shared/Footer';
import Header from './Componnent/Shared/Header';
import Home from './Componnent/Home/Home'
import About from './Componnent/About/About'
import Login from './Componnent/Login/Login';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
    <Route path='/' element={<Home></Home>} ></Route>
    <Route path='/about' element={<About></About>} ></Route>
    <Route path='/login' element={<Login></Login>} ></Route>
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App;
