import styled from 'styled-components';

const StyledCard = styled.div`
  width: 50px;
  height: ${(props) => props.cardHeight};
  background-color: ${(props) => props.cardColor};
`;

const Card = ({ cardColor, cardHeight }) => {
  return (
    <div>
      <StyledCard cardColor={cardColor} cardHeight={cardHeight} />
    </div>
  );
};

export default Card;
