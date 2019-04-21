import React from 'react';

export const SearchBar = ({ searchValue, updateSearch }) => {
  return (
    <input type="text" placeholder="Search" value={searchValue} onChange={updateSearch} />
  );
};