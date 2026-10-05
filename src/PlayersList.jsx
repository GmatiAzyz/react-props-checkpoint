import React from 'react';
import Player from './Player';
import players from './players';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const PlayersList = () => {
  const containerStyle = {
    padding: '3rem 1rem 4rem 1rem',
    minHeight: '100vh'
  };

  const heroHeaderStyle = {
    textAlign: 'center',
    marginBottom: '3.5rem',
    color: '#ffffff'
  };

  const titleStyle = {
    fontWeight: '900',
    fontSize: '3rem',
    background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-1px',
    marginBottom: '0.8rem'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    color: '#94a3b8',
    maxWidth: '650px',
    margin: '0 auto 1.5rem auto',
    fontWeight: '400'
  };

  return (
    <Container style={containerStyle}>
      {/* Hero Section */}
      <div style={heroHeaderStyle}>
        <h1 style={titleStyle}>WORLD FOOTBALL ICONS</h1>
        <p style={subtitleStyle}>
          Discover the world's most talented football superstars, their official teams, ages, nationalities, and jersey numbers.
        </p>
        <Badge bg="light" text="dark" className="fs-6 px-3 py-2 rounded-pill shadow-sm">
          🏆 Total Featured Players: {players.length}
        </Badge>
      </div>

      {/* Players Grid */}
      <Row className="justify-content-center g-4">
        {players.map((player, index) => (
          <Col key={player.id || index} xs={12} sm={6} md={4} lg={4} xl={3} className="d-flex justify-content-center">
            {/* Passing props using the spread operator */}
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
