import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
  width: 200px;
  height: ${(props) => props.cardBgHeight};
  background-color: ${(props) => props.cardBgColor};
  border-radius: 15px;
`;

const CardBackground = ({ cardBgColor, cardBgHeight }) => {
  return (
    <div>
      <StyledCard cardBgColor={cardBgColor} cardBgHeight={cardBgHeight} />
    </div>
  );
};

export default CardBackground;
