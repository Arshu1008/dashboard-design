import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <>
      <GlobalStyle />
        <Sidebar />
        <Dashboard />
    </>
  );
}

export default App;
