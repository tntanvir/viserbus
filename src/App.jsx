import React from 'react';
import { Button } from "@material-tailwind/react";
import { NavbarManu } from './component/NavberManu';
import Home from './component/Home';
import { Footer } from './component/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/About';
import Contect from './component/Contect';
import GetTicket from './component/GetTicket';

const App = () => {
  return (
    <>
      <Router>
        <NavbarManu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contect' element={<Contect />} />
          <Route path='/ticket' element={<GetTicket />} />
        </Routes>
        <Footer />

      </Router>

    </>
  );
};

export default App;