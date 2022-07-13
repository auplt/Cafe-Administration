import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './Pages/StartPage';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ClientRegistration from './Pages/ClientRegistration';
import OrderRegistration from './Pages/OrderRegistration';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/client_reg" element={<ClientRegistration />} />
          <Route exact path="/order_reg" element={<OrderRegistration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
