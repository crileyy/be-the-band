import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config.js';

export const searchTrack = (search) => {
  SpotifyGraphQLClient(config).query(`
  {
    track(name: "${search}") {
      id
      artists {
        name
      }
    }
  }
`).then(result => {
  console.log('result ' + JSON.stringify(result.data.track));
  return result;
});
}