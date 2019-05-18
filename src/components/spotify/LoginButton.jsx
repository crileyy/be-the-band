// login button to redirect to login url
import React from 'react';

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
    const redirect_uri = 'http://localhost:3000/'; // Your redirect uri
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
    <button onClick={handleClick}>Login to Spotify</button>
  );
};

/*
when button is clicked:
function() {
            var client_id = 'CLIENT_ID'; // Your client id
            var redirect_uri = 'REDIRECT_URI'; // Your redirect uri
            var state = generateRandomString(16);
            localStorage.setItem(stateKey, state);
            var scope = 'user-read-private user-read-email';
            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);
            window.location = url;
          }

*/