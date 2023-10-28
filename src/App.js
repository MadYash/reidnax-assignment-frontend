import logo from './logo.svg';
import './App.css';
import SignIn from './components/pages/Signin';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Data from './components/pages/Data';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/pages/ProtectedRoute';

function App() {
  return (
  <>
  <ToastContainer/>
  <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path='/home' element={<ProtectedRoute  Component={Home} />}/>
    <Route path='/data' element={<ProtectedRoute Component={Data}/>}/>
  </Routes>
  </>
  );
}

export default App;
