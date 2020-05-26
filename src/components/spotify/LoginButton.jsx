import React from 'react';
import './LoginButton.css'

const stateKey = 'spotify_auth_state';

const generateRandomString = (length) => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const LoginButton = () => {
  const handleClick = () => {
    const client_id = '9959dc3f236d4ac1b4642e25c28a2643'; // Your client id
    const redirect_uri = 'https://be-the-band.herokuapp.com/'; // Your redirect uri
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);
    const scope = '';
    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    window.location = url;
  };

  return (
    <button className="zocial login-button" onClick={handleClick}>Login to Spotify</button>
  );
};
