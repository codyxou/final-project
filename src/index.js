/*Copyright (c) 2023 Promineo Tech
    Author:  Promineo Tech Academic Team
    Subject: React Router Boiler Plate
-------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './Index.css';


ReactDOM.render(
  <BrowserRouter>
 <App />
</BrowserRouter>,
  document.getElementById('root')
);


