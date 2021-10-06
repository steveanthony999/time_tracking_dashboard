import React from 'react';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div id='app'>
      <Card
        cardColor='var(--card-bg-dark-blue)'
        cardHeight='100px'
        cardBgColor='var(--soft-orange)'
      />
      <Card
        cardColor='var(--card-bg-dark-blue)'
        cardHeight='100px'
        cardBgColor='var(--soft-orange)'
      />
    </div>
  );
}

export default App;
