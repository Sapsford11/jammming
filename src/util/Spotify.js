const clientID = '9dc421eaefbd4e6195484248a7ba4d25';
const redirectUri = "http://localhost:3000/";
let accessToken = '';

// Getting a Spotify user's access token.
let Spotify = {
  getAccessToken() {
    if(accessToken){
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/'); // clears the parameters, allows to grab a new access token when expires
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
    }
  },

    /* Passes the search term value to a Spotify request, then returns the response
    as a list of tracks in JSON format. */
    search(term) {
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        }
      });

    },

    //Writing the learner's custom playlist in Jammming to their Spotify account.
    savePlaylist(playlistName, trackURIs) {
      if(!playlistName || !trackURIs) {
          return;
        }
        let accessToken = this.getAccessToken();
        let headers = {
          Authorization: `Bearer ${accessToken}`
        }
        let user_id;
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
          ).then(response => response.json()
          ).then(jsonResponse => {
            user_id = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ name: playlistName })
            }).then(response => response.json()
            ).then(jsonResponse => {
            let playlist_id = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({ uris: trackURIs })
            }).then(response => response.json()
            ).then(jsonResponse => {
            });
          })
        });
      }
    };

export default Spotify;
