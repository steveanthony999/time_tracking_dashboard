import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card';
import data from './data';

import IconWork from './images/icon-work.svg';
import IconPlay from './images/icon-play.svg';
import IconStudy from './images/icon-study.svg';
import IconExercise from './images/icon-exercise.svg';
import IconSocial from './images/icon-social.svg';
import IconSelfCare from './images/icon-self-care.svg';
import ProfilePic from './images/image-jeremy.png';

import './App.css';

function App() {
  return (
    <div id='app'>
      <div className='container'>
        <div className='item profile'>
          <Card
            cardColor='var(--blue)'
            cardHeight='69%'
            cardTop='0px'
            cardBgColor='var(--dark-blue)'
            cardBgHeight='518px'
          />
          <div className='profile-container'>
            <img src={ProfilePic} alt='profile' />
            <div className='profile-info'>
              <p>Report for</p>
              <h4>Jeremy Robson</h4>
            </div>
            <div className='time-frame-container'>
              <div></div>
              <p>Daily</p>
              <p className='active'>Weekly</p>
              <p>Monthly</p>
            </div>
          </div>
        </div>
        {data.map((i) => (
          <div className='item' key={i.id}>
            <Card
              cardColor='var(--dark-blue)'
              cardHeight='199px'
              cardTop='45px'
              cardBgColor={i.bgColor}
              cardBgHeight='100px'
            />
            <img
              src={
                i.id === 1
                  ? IconWork
                  : i.id === 2
                  ? IconPlay
                  : i.id === 3
                  ? IconStudy
                  : i.id === 4
                  ? IconExercise
                  : i.id === 5
                  ? IconSocial
                  : i.id === 6 && IconSelfCare
              }
              alt='icon'
              className='icon'
            />
            <div className='info-container'>
              <div className='info-title-bar'>
                <p>{i.title}</p>
                <FontAwesomeIcon icon={faEllipsisH} />
              </div>
              <div className='info-content'>
                <h4>{i.timeframes.weekly.current}hrs</h4>
                <p>Last Week - {i.timeframes.weekly.previous}hrs</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
