import React from 'react';
import Card from './components/Card';
import data from './data';

import './App.css';

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <div className='item'></div>
        {data.map((i) => (
          <div className='item'>
            <div>{i.title}</div>
            <div>{i.timeframes.weekly.current}hrs</div>
            <div>{i.timeframes.weekly.previous}hrs</div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
