const getHashParams = () => {
  let hashParams = {};
  let e, r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export default {
  "clientId": "9959dc3f236d4ac1b4642e25c28a2643",
  "clientSecret": "bb3f8461ab6b4417a0fb338f695bc736",
  "redirectUri": "",
  "accessToken": getHashParams().access_token
}
