import React from 'react';
import { Routes, Route, Link, Router } from 'react-router-dom';

import Home from './Components/Home.js';
import Contact from './Components/Contact.js';
import Portfolio from './Components/Portfolio.js';
import StunningViews from './Components/StunningViews.js';
import Construction from './Components/Construction.js';
import Mapping from './Components/Mapping.js';
import AddYourOwn from './Components/AddYourOwn.js';
import './App.css';



export default function App() {

  
  return (

      <div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
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
         </Routes>
      </div>
  );
}
