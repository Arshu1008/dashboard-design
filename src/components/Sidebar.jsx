import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faUtensils, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  background-color: #2d2d3b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  }
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  cursor: pointer;
  color: #b0b0b0;

  &:hover {
    background-color: #1d1d2b;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

function Sidebar({ isOpen }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarItem>
      lll
        <SidebarIcon icon={faHome} />
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon icon={faClipboardList} />
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon icon={faUtensils} />
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon icon={faCog} />
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon icon={faSignOutAlt} />
      </SidebarItem>
    </SidebarContainer>
  );
}

export default Sidebar;
