import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/search/SearchBar';
import { SpotifyFrame } from './components/spotify/SpotifyFrame';
import { TabFrame } from './components/tabs/TabFrame';
import { Header } from './components/header/Header';

/*

search bar for songs or artists
iframe with spotify song | iframe with ultimate guitar (iframe with the artist)
https://www.guitartabs.cc/tabs/v/vampire_weekend/step_tab.html ?
https://www.guitartabsexplorer.com/vampire-weekend-Tabs/1/

*/
export const App = () => {

  const [search, setSearch] = useState('');

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchValue={search} updateSearch={updateSearch} />
      <div className="iframes">
        <SpotifyFrame search={search} />
        <TabFrame search={search} />
      </div>
    </div>
  );
};
