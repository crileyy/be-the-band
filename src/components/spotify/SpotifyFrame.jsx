import React from 'react';
import './SpotifyFrame.css';

export const SpotifyFrame = () => {
  return (
    <div className="spotify-frame">
      <span>Spotify iframe here</span>
      <iframe title="spotify" src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};