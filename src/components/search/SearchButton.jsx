import React from 'react';

export const SearchButton = ({ handleSearchSpotify }) => {
  return (
    <button onClick={handleSearchSpotify}>Search</button>
  );
};