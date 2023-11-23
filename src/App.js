// import './App.css';
// import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Mens from './Components/Mens';
import Womens from './Components/Womens';
import Kids from './Components/Kids';
import Electronics from './Components/Electronics';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/mens' element={<Mens
        />}/>
        <Route path='/womens' element={<Womens
        />}/>
        <Route path='/kids' element={<Kids
        />}/>
        <Route path='/electronics' element={<Electronics/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
