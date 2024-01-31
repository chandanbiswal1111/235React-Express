import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import ProductData from './Components/ProductData';
import SignUp from './Components/Signup';

const routing = (
  <Router>
    <div style={{ textAlign: "center", padding: "20px", backgroundColor: "cyan", marginBottom: "10px"}}>
      <Link to='/'>Home</Link> |
      <Link to='/ProdData'>Product</Link> |
      <Link to='/login'>Login</Link>
      <Link to='/signUp'>SignUp</Link>
    </div>
    <Routes>
      <Route path='/' element={<App />} ></Route>

      <Route path='/ProdData' element={
        <ProtectedRoute returnUrl='/ProdData'>
          <ProductData/>
        </ProtectedRoute>
      } ></Route>

      <Route path='/login' element={<Login />} ></Route>
      <Route path='/signUp' element={<SignUp/>} ></Route>
    </Routes>

  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
