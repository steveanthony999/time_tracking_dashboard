import React from 'react';

import styled from 'styled-components';

import CardBackground from './CardBackground';

const StyledCard = styled.div`
  width: 200px;
  height: ${(props) => props.cardHeight};
  background-color: ${(props) => props.cardColor};
  border-radius: 15px;
  position: absolute;
  top: ${(props) => props.cardTop};
`;

const Card = ({ cardColor, cardHeight, cardBgColor, cardTop }) => {
  return (
    <div className='card-container'>
      <CardBackground cardBgColor={cardBgColor} cardBgHeight='199px' />
      <StyledCard
        cardColor={cardColor}
        cardHeight={cardHeight}
        cardTop={cardTop}
      />
    </div>
  );
};

export default Card;
