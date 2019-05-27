import React from 'react';
import './SpotifyFrame.css';

export const SpotifyFrame = ({ data }) => {

  /*
  use spotify api to search for track and get the uri (6rqhFgbbKwnb9MLmUQDhG6)
  and add it to the end of: https://open.spotify.com/embed/track/

  Search: Be The Band `search bar`
  */

  const spotifyFrame = () => {
    if (Object.keys(data).length === 0 || data === null || data.data.track ===  null) {
      if (data !== null && data !== undefined && data.errors !== undefined && data.errors.length > 0) {
        alert("Please login to Spotify");
      }
      return null;
    } else {
      return 'https://open.spotify.com/embed/track/' + data.data.track.id;
    }
  }

  return (
    <div className="spotify-frame">
      <span className="spotify-text">Spotify song <span role="img" aria-label="jsx-a11y/accessible-emoji">🎶</span></span>
      <iframe className="spotify" title="spotify" src={spotifyFrame()}  frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};