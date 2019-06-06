import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/search/SearchBar';
import { SpotifyFrame } from './components/spotify/SpotifyFrame';
import { LoginButton } from './components/spotify/LoginButton';
import { TabFrame } from './components/tabs/TabFrame';
import { Header } from './components/header/Header';
import { searchTrack } from './util/SpotifyAPIHelper';
import { SearchButton } from './components/search/SearchButton';

/*

search bar for songs or artists
iframe with spotify song | iframe with ultimate guitar (iframe with the artist)
https://www.guitartabs.cc/tabs/v/vampire_weekend/step_tab.html ?
https://www.guitartabsexplorer.com/vampire-weekend-Tabs/1/

*/
export const App = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState({});
  const [displayFrames, setDisplayFrames] = useState(false);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSpotify = () => {
    searchTrack(search).then(result => {
      setData(result);
      setDisplayFrames(true);
    })
  };

  return (
    <div className="App">
      <Header />
      <LoginButton />
      <div className="app-searchbar"><SearchBar searchValue={search} updateSearch={updateSearch} /></div>
      <SearchButton handleSearchSpotify={handleSearchSpotify} />
      {displayFrames ?
        <div className="iframes">
          <SpotifyFrame data={data} />
          <TabFrame data={data} />
        </div> :
        <h3 className="happy-rocking">Happy rocking <span role="img" aria-label="jsx-a11y/accessible-emoji">🎸🤘</span></h3>}
    </div>
  );
};
