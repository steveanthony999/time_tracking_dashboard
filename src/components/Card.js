import React from 'react';

import styled from 'styled-components';

import CardBackground from './CardBackground';

const StyledCard = styled.div`
  width: 200px;
  height: ${(props) => props.cardHeight};
  background-color: ${(props) => props.cardColor};
  border-radius: 15px;
  position: absolute;
  top: 50px;
`;

const Card = ({ cardColor, cardHeight, cardBgColor }) => {
  return (
    <div className='card-container'>
      <CardBackground cardBgColor={cardBgColor} cardBgHeight='100px' />
      <StyledCard cardColor={cardColor} cardHeight={cardHeight} />
    </div>
  );
};

export default Card;
