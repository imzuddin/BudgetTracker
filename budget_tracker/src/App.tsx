import React from 'react';
import './App.css';

import { GenericCard } from './components/GenericCard';

function App() {
  return (
    <div className="App">
      <div className='container'>

        <section className='snap'>
          <div className='curve layer'>
            <h1 className='innerTitle'> Welcome, Here is your Dashboard</h1>
          </div>

          <div>
            <GenericCard/>
          </div>
        </section>

        <section className='snap'>
          <div>
            <GenericCard/>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
