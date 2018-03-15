let accesstoken = '';

Spotify {
  getAccessToken() {
    if(accessToken){
      return accessToken;
    }
};

export default Spotify;
