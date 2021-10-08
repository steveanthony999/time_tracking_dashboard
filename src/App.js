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
            cardColor='var(--blue)'
            cardHeight='70%'
            cardTop='0px'
            cardBgColor='var(--dark-blue)'
            cardBgHeight='518px'
          />
        </div>
        {data.map((i) => (
          <div className='item' key={i.id}>
            {/* <div>{i.title}</div>
            <div>{i.timeframes.weekly.current}hrs</div>
            <div>{i.timeframes.weekly.previous}hrs</div> */}
            <Card
              cardColor='var(--dark-blue)'
              cardHeight='199px'
              cardTop='45px'
              cardBgColor={i.bgColor}
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
