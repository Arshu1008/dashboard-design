import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCheckCircle, faTimesCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const IconContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 14px;
`;

const Value = styled.p`
  margin: 5px 0 0;
  font-size: 20px;
  font-weight: bold;
`;

const Percentage = styled.span`
  color: ${({ isPositive }) => (isPositive ? 'green' : 'red')};
  font-size: 12px;
  margin-left: 5px;
`;

const icons = {
  orders: faShoppingCart,
  delivered: faCheckCircle,
  cancelled: faTimesCircle,
  revenue: faDollarSign,
};

const bgColors = {
  orders: '#4e73df',
  delivered: '#1cc88a',
  cancelled: '#e74a3b',
  revenue: '#f6c23e',
};

function StatsCard({ title, value, percentage, isPositive, type }) {
  return (
    <Card>
      <IconContainer bgColor={bgColors[type]}>
        <FontAwesomeIcon icon={icons[type]} size="lg" />
      </IconContainer>
      <Info>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Info>
      <Percentage isPositive={isPositive}>
        {isPositive ? `+${percentage}%` : `-${percentage}%`}
      </Percentage>
    </Card>
  );
}

export default StatsCard;
