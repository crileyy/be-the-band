import React from 'react';
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
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="iframes">
        <SpotifyFrame />
        <TabFrame />
      </div>
    </div>
  );
};
