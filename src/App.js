import React from 'react';
import Card from './components/Card';
import data from './data';

import './App.css';

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <div className='item'>
          <Card
            cardColor='var(--card-blue)'
            cardHeight='65%'
            cardTop='0px'
            cardBgColor='var(--card-dark-blue)'
            cardBgHeight='500px'
          />
        </div>
        {data.map((i) => (
          <div className='item'>
            {/* <div>{i.title}</div>
            <div>{i.timeframes.weekly.current}hrs</div>
            <div>{i.timeframes.weekly.previous}hrs</div> */}
            <Card
              cardColor='var(--card-dark-blue)'
              cardHeight='193px'
              cardTop='50px'
              cardBgColor='var(--card-blue)'
              cardBgHeight='100px'
            />
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
