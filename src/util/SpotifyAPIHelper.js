import { SpotifyGraphQLClient } from 'spotify-graphql';
import config from './config.js';

export const searchTrack = (search) => {
  return new Promise((resolve, reject) => {
    SpotifyGraphQLClient(config).query(`
  {
    track(name: "${search}") {
      id
      name
      artists {
        name
      }
    }
  }
`).then(result => {
      resolve(result);
    });
  });
  
}
