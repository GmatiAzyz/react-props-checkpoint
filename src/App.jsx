import React from 'react';
import CustomNavbar from './Navbar';
import PlayersList from './PlayersList';

function App() {
  return (
    <div style={{
      backgroundColor: '#0b0f19',
      backgroundImage: 'radial-gradient(circle at 50% 0%, #1e293b 0%, #0f172a 70%, #0b0f19 100%)',
      minHeight: '100vh',
      color: '#f8fafc'
    }}>
      <CustomNavbar />
      <PlayersList />
    </div>
  );
}

export default App;
