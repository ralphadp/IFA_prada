import viteLogo from '/prada.jpg'

import React, { useState, useMemo } from 'react';

import Tablas from './tablas';


import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

   return (
    <>
      <div>
        <a href="https://www.facebook.com/IFA.R.G.P/" target="_blank">
          <img src={viteLogo} className="logo" alt="prada logo" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/IFA.R.G.P/" target="_blank" className="title"> Escuela Superior de Artes</a><br/>
	      <a href="https://www.facebook.com/IFA.R.G.P/" target="_blank" className="title"> RAUL G. PRADA</a> <br/>
      </div>
      <br/>

      <Tablas/>

    </>
  )
}

export default App;
