import React from 'react';
import TrackList from '/:Components/TrackList/TrackList.js';
import '/.Playlist.css'

class Playlist extends React.Component {
  render() {
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList tracks={this.props.playlistTracks}/>
      <a className="Playlist-save">SAVE TO SPOTIFY</a>
    </div>
  }
}

export default Playlist;
