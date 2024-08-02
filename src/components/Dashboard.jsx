import React, { useState } from 'react';
import styled from 'styled-components';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import Goals from './Goals';
import StatsCard from './StatsCard';
import NetProfit from './NetProfit';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = styled.div`
  display: flex;
  height: 100vh;
`;

const DashboardContainer = styled.div`
  padding: 20px;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 0;
    padding-top: 60px; /* Adjust this based on your header height */
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  background-color: #2d2d3b;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <DashboardLayout>
      <Sidebar isOpen={isSidebarOpen} />
      <DashboardContainer style={{ marginLeft: isSidebarOpen ? '80px' : '0' }}>
        <Header toggleSidebar={toggleSidebar} />
        <StatsContainer>
          <StatsCard title="Total Orders" value="75" percentage="3" isPositive={true} type="orders" />
          <StatsCard title="Total Delivered" value="70" percentage="3" isPositive={true} type="delivered" />
          <StatsCard title="Total Cancelled" value="5" percentage="3" isPositive={false} type="cancelled" />
          <StatsCard title="Total Revenue" value="$12k" percentage="3" isPositive={false} type="revenue" />
          <NetProfit value="$6759.25" percentage="3" isPositive={true} progress={70} />
        </StatsContainer>
        <Section>
          <h3>Activity</h3>
          <ActivityChart />
        </Section>
        <Section>
          <h3>Recent Orders</h3>
          <RecentOrders />
        </Section>
        <Section>
          <h3>Customer's Feedback</h3>
          <Feedback />
        </Section>
        <Section>
          <h3>Goals</h3>
          <Goals />
        </Section>
      </DashboardContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
