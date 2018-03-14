import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';

class App extends Component {
  constructor(props) {
  super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist!',
      playlistTracks: []
    }

  };

  addTrack(track) {
  if (track.id !== this.state.playlistTracks)
      {
        this.state.playlistTracks = this.state.playlistTracks.push(track);
      }
  }


  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
