import React from 'react';

import styled from 'styled-components';

import CardBackground from './CardBackground';

const StyledCard = styled.div`
  width: 100%;
  height: ${(props) => props.cardHeight};
  background-color: ${(props) => props.cardColor};
  border-radius: 15px;
  position: absolute;
  top: ${(props) => props.cardTop};
  z-index: 2;
`;

const Card = ({
  cardColor,
  cardHeight,
  cardBgColor,
  cardTop,
  cardBgHeight,
}) => {
  return (
    <div className='card-container'>
      <CardBackground cardBgColor={cardBgColor} cardBgHeight={cardBgHeight} />
      <StyledCard
        cardColor={cardColor}
        cardHeight={cardHeight}
        cardTop={cardTop}
      />
    </div>
  );
};

export default Card;
