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

const feedback = [
  "Great service, fast delivery!",
  "Quality products, very satisfied!",
  "Customer support was very helpful.",
  "Had some issues, but they were resolved quickly.",
  "Overall, a positive experience.",
];

function Feedback() {
  return (
    <Card>
      <h3>Customer's Feedback</h3>
      <List>
        {feedback.map((comment, index) => (
          <ListItem key={index}>{comment}</ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Feedback;
