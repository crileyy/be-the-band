import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/search/SearchBar';
import { SpotifyFrame } from './components/spotify/SpotifyFrame';
import { TabFrame } from './components/tabs/TabFrame';
import { Header } from './components/header/Header';
import { searchTrack } from './util/SpotifyAPIHelper';

/*

search bar for songs or artists
iframe with spotify song | iframe with ultimate guitar (iframe with the artist)
https://www.guitartabs.cc/tabs/v/vampire_weekend/step_tab.html ?
https://www.guitartabsexplorer.com/vampire-weekend-Tabs/1/

*/
export const App = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState({});

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSpotify = () => {
    searchTrack(search).then(result => {
      setData(result);
    })
  };

  return (
    <div className="App">
      <Header />
      <SearchBar searchValue={search} updateSearch={updateSearch} />
      <button onClick={handleSearchSpotify}>Search</button>
      <div className="iframes">
        <SpotifyFrame data={data} />
        <TabFrame data={data} />
      </div>
    </div>
  );
};
