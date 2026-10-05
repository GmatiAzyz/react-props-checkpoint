import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

// Player Component destructured with default parameters
const Player = ({
  name = "Unknown Player",
  team = "Free Agent",
  nationality = "Global",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80"
}) => {
  // Fallback image handler to ensure image always renders cleanly
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80";
  };

  // Inline styles for the component
  const cardStyle = {
    width: '100%',
    maxWidth: '20rem',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
    transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease',
    backgroundColor: '#ffffff',
    margin: '0.8rem auto'
  };

  const imageContainerStyle = {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
    backgroundColor: '#0f172a'
  };

  const imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    transition: 'transform 0.5s ease'
  };

  const badgeStyle = {
    position: 'absolute',
    top: '14px',
    right: '14px',
    fontSize: '1.1rem',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
    color: '#ffffff',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
    border: '2px solid #ffffff'
  };

  const cardTitleStyle = {
    fontSize: '1.45rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '0.3rem',
    letterSpacing: '-0.3px'
  };

  const teamSubtitleStyle = {
    color: '#2563eb',
    fontWeight: '700',
    fontSize: '1rem',
    marginBottom: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const listGroupItemStyle = {
    border: 'none',
    padding: '0.7rem 0.9rem',
    fontSize: '0.95rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    marginBottom: '8px',
    borderRadius: '10px'
  };

  return (
    <Card style={cardStyle} className="h-100 player-card shadow-lg hover-elevate">
      <div style={imageContainerStyle}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          style={imageStyle}
          onError={handleImageError}
        />
        <div style={badgeStyle} title={`Jersey Number #${jerseyNumber}`}>
          #{jerseyNumber}
        </div>
      </div>
      <Card.Body style={{ padding: '1.4rem' }}>
        <Card.Title style={cardTitleStyle}>{name}</Card.Title>
        <div style={teamSubtitleStyle}>
          <span>⚽</span>
          <span>{team}</span>
        </div>
        <ListGroup variant="flush">
          <ListGroup.Item style={listGroupItemStyle}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Nationality:</span>
            <strong style={{ color: '#1e293b' }}>🌍 {nationality}</strong>
          </ListGroup.Item>
          <ListGroup.Item style={listGroupItemStyle}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Age:</span>
            <strong style={{ color: '#1e293b' }}>{age} yrs</strong>
          </ListGroup.Item>
          <ListGroup.Item style={listGroupItemStyle}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Jersey Number:</span>
            <Badge bg="primary" style={{ fontSize: '0.9rem', padding: '0.4em 0.7em' }}>
              #{jerseyNumber}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

// Default props for each attribute as required
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Global",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&auto=format&fit=crop&q=80"
};

export default Player;
