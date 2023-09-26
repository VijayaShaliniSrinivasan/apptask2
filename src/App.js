import Navbar from './Components/Navbar';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Service from './Components/Service';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/signup' element={<Signup />}></Route>

      </Routes>
    </>
  );
}

export default App;