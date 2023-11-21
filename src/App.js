// import './App.css';
// import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
    
    </div>
  );
}

export default App;
