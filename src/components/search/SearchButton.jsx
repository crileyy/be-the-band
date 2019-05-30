import React from 'react';
import './SearchButton.css';

export const SearchButton = ({ handleSearchSpotify }) => {
  return (
    <button className="search-button" onClick={handleSearchSpotify}>Search</button>
  );
};