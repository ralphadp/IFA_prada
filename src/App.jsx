import viteLogo from '/prada.jpg'

import React, { useState, useMemo } from 'react';

import Tablas from './tablas';
import Footer from './footer';

const facebookSite = "https://www.facebook.com/IFA.R.G.P/";

import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

   return (
    <>
      <div>
        <a href={facebookSite} target="_blank">
          <img src={viteLogo} className="logo" alt="prada logo" />
        </a>
      </div>
      <div>
        <a href={facebookSite} target="_blank" className="title"> Escuela Superior de Artes</a><br/>
	      <a href={facebookSite} target="_blank" className="title"> RAUL G. PRADA</a> <br/>
      </div>
      <br/>

      <Tablas/>
      
      <Footer/>
    </>
  )
}

export default App;
