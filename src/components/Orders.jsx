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
`;

function Orders() {
  return (
    <Card>
      <h3>Recent Orders</h3>
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
          <tr>
            <td>Wade Warren</td>
            <td>15478256</td>
            <td>$124.00</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Jane Cooper</td>
            <td>48967586</td>
            <td>$365.02</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Guy Hawkins</td>
            <td>78958215</td>
            <td>$45.88</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <td>Kristin Watson</td>
            <td>20965732</td>
            <td>$65.00</td>
            <td>Cancelled</td>
          </tr>
          <tr>
            <td>Cody Fisher</td>
            <td>95715620</td>
            <td>$545.00</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Savannah Nguyen</td>
            <td>78514568</td>
            <td>$128.20</td>
            <td>Delivered</td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default Orders;
