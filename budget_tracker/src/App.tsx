import React from 'react';
import './App.css';

import { GenericCard } from './components/GenericCard';
import Dropdown from './components/Dropdown';
import { SwipeDashboard } from './components/SwipeDashboard';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <section className='snap'>
          <div className='curve'>

              <Dropdown/>

              <h1 className='title'> Welcome to Budget.io</h1>
              <h2 className='subtitle'> The one stop shop for budget planning </h2>

              <SwipeDashboard/>
          </div>
        </section>
        <section className='snap' style={{background: "black"}}>
        </section>
      </div>
    </div>
  );
}

export default App;
