import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NavbarNew from './components/Navbar/Navbar';
import HeroSection from './components/TestComp/TestComp';
import { Routes, Route } from 'react-router-dom'
import FavList from './components/FavList/FavList';

function App() {
  return (
    <>
      <div className='div-App'>
        <NavbarNew />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<FavList/>} />
        </Routes>


      </div>


    </>
  );
}

export default App;
