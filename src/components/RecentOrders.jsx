import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #34343e;
  }

  th {
    text-align: left;
  }
`;

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$385.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78058215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Delivered' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Pending' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
];

function RecentOrders() {
  return (
    <Card>
      <Table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default RecentOrders;
