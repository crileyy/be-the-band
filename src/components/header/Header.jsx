import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <h1>Be The Band</h1>
      <h3>Search for a song to have the song in Spotify and accompanying tabs appear below</h3>
      <h3>Happy rocking <span role="img" aria-label="jsx-a11y/accessible-emoji">🎸🤘</span></h3>
    </div>
  );
};