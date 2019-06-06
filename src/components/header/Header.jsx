import React from 'react';
import './Header.css';

export const Header = () => {

  // TODO: need background image for header
  // Search for a song and artist to have the song in Spotify and accompanying tabs appear below

  return (
    <div className="header">
      <h1 className="title">Be The Band</h1>
      <h3 className="search-note">Search for a song or artist...</h3>
    </div>
  );
};