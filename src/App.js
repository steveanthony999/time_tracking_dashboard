import React from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <div className='container-left' style={{ transform: 'rotate(180deg)' }}>
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='303px'
            cardBgColor='var(--soft-orange)'
            cardTop='120px'
          />
        </div>
        <div className='container-right'>
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
          <Card
            cardColor='var(--card-bg-dark-blue)'
            cardHeight='160px'
            cardBgColor='var(--soft-orange)'
            cardTop='40px'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
