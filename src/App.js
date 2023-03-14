import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NavbarNew from './components/Navbar/Navbar';
import HeroSection from './components/TestComp/TestComp';

function App() {
  return (
    <>
      <div className='div-App'>
        <NavbarNew />
        <HeroSection />
        <Home />
      </div>


    </>
  );
}

export default App;
