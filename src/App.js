import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';
import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Portfolio from './Components/Portfolio.js';
import StunningViews from './Components/StunningViews.js';
import Construction from './Components/Construction.js';
import Mapping from './Components/Mapping.js';
import Confirmation from './Components/Confirmation.js';
import AddYourOwn from './Components/AddYourOwn.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default function App() {

  
  return (

      <div>

        <nav className='topnav'>
              <Link to="/" className='active'>Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/">
            <Route index element={<Portfolio/>} />
            <Route path="stunningviews" element={<StunningViews />} />
            <Route path="construction" element={<Construction />} />
            <Route path="mapview" element={<Mapping />} />
            <Route path="communitypics" element={<AddYourOwn />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
         </Routes>
      </div>
  );
}
