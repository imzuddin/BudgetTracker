import React from 'react';
import './App.css';

import { GenericCard } from './components/GenericCard';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className="App">
        <div className='curve'>

          <Dropdown/>

          <h1 className='title'> Welcome to Budget.io</h1>
          <h2 className='subtitle'> The one stop shop for budget planning </h2>


        </div>
    </div>
  );
}

export default App;
