import React from 'react';
import './SearchBar.css';

export const SearchBar = ({ searchValue, updateSearch }) => {
  return (
    <input className="searchBox" type="text" placeholder="Search for a song" value={searchValue} onChange={updateSearch} />
  );
};