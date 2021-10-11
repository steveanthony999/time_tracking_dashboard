import React, { useEffect, useState } from 'react';
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
  const [timeFrame, setTimeFrame] = useState('weekly');

  useEffect(() => {
    console.log(timeFrame);
  }, [timeFrame]);

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
              <p
                className={timeFrame === 'daily' ? 'active' : ''}
                onClick={() => setTimeFrame('daily')}>
                Daily
              </p>
              <p
                className={timeFrame === 'weekly' ? 'active' : ''}
                onClick={() => setTimeFrame('weekly')}>
                Weekly
              </p>
              <p
                className={timeFrame === 'monthly' ? 'active' : ''}
                onClick={() => setTimeFrame('monthly')}>
                Monthly
              </p>
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
                <FontAwesomeIcon icon={faEllipsisH} color='#BBC0FF' />
              </div>
              <div className='info-content'>
                <h4>
                  {timeFrame === 'daily'
                    ? i.timeframes.daily.current
                    : timeFrame === 'weekly'
                    ? i.timeframes.weekly.current
                    : timeFrame === 'monthly' && i.timeframes.monthly.current}
                  hrs
                </h4>
                <p>
                  Last Week -{' '}
                  {timeFrame === 'daily'
                    ? i.timeframes.daily.previous
                    : timeFrame === 'weekly'
                    ? i.timeframes.weekly.previous
                    : timeFrame === 'monthly' && i.timeframes.monthly.previous}
                  hrs
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
