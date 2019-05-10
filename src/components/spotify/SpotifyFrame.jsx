import React from 'react';
import './SpotifyFrame.css';
import { searchTrack } from '../../util/SpotifyAPIHelper';

export const SpotifyFrame = ({ search }) => {

  /*
  use spotify api to search for track and get the uri (6rqhFgbbKwnb9MLmUQDhG6)
  and add it to the end of: https://open.spotify.com/embed/track/

  Search: Be The Band `search bar`
  */

  // TODO need to fix how url is created
  const spotifyFrame = () => {
    console.log(search);
    const id = searchTrack('help');
    console.log(id);
    const link = "https://open.spotify.com/embed/track/" + id;
    console.log(link);
    return "https://open.spotify.com/embed/track/" + id;
  };

  return (
    <div className="spotify-frame">
      <span>Spotify iframe here</span>
      <iframe className="spotify" title="spotify" src={spotifyFrame()} height="500" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
};