import React from 'react';
import './SpotifyFrame.css';

export const SpotifyFrame = ({ search }) => {

  /*
  use spotify api to search for track and get the uri (6rqhFgbbKwnb9MLmUQDhG6)
  and add it to the end of: https://open.spotify.com/embed/track/
  */
  return (
    <div className="spotify-frame">
      <span>Spotify iframe here</span>
      <iframe className="spotify" title="spotify" src="https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6" height="500" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};