import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #34343e;
`;

const goals = [
  "Increase sales by 20% next quarter.",
  "Expand product line.",
  "Improve customer retention.",
  "Enhance online presence.",
  "Streamline operations for better efficiency.",
];

function Goals() {
  return (
    <Card>
      <h3>Goals</h3>
      <List>
        {goals.map((goal, index) => (
          <ListItem key={index}>{goal}</ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Goals;
