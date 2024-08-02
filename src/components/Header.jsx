import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; /* Adjust padding as needed */
  background-color: #2d2d3b;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1001;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for better separation */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    & > * {
      margin-left: 10px;
    }
  }
`;

const SearchInput = styled.input`
  background: none;
  border: 1px solid #555;
  border-radius: 4px;
  padding: 5px 10px;
  color: white;
  flex-grow: 1;
  margin: 0 20px; /* Add margin to create space between search and icons */

  &::placeholder {
    color: #888;
  }

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

function Header({ toggleSidebar }) {
  return (
    <HeaderContainer>
      <ToggleButton onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleButton>
      <SearchInput type="text" placeholder="Search..." />
      <HeaderActions>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faBell} />
        <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
      </HeaderActions>
    </HeaderContainer>
  );
}

export default Header;
