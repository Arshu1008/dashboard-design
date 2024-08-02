import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
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
  font-size: 24px;
  margin: 5px 0;
  font-weight: bold;
`;

const Percentage = styled.span`
  color: ${({ isPositive }) => (isPositive ? 'green' : 'red')};
  font-size: 12px;
`;

function NetProfit({ value, percentage, isPositive, progress }) {
  return (
    <Card>
      <Info>
        <Title>Net Profit</Title>
        <Value>{value}</Value>
        <Percentage isPositive={isPositive}>
          {isPositive ? `+${percentage}%` : `-${percentage}%`}
        </Percentage>
      </Info>
      <div style={{ width: 60, height: 60 }}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={buildStyles({
            textSize: '16px',
            pathColor: `rgba(62, 152, 199, ${progress / 100})`,
            textColor: '#fff',
            trailColor: '#34343e',
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
    </Card>
  );
}

export default NetProfit;
