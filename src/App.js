import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import NavbarNew from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <div className='div-App'>
    <NavbarNew />
      <Home />
    </div>


    </>
  );
}

export default App;
