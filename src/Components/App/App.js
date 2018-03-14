import React, { Component } from 'react';
import './Components/App/App.css';

class App extends Component {
  constructor(props) {
  super(props);

    this.state.searchResults = {
      searchResults: [],
      playlistName: 'New Playlist!',
      playlistTracks: []
    }

    addTrack(track) {
    if (track.id !== this.state.playlistTracks)
        {
          this.state.playlistTracks = this.state.playlistTracks.push(track);
        }
    }

  }
  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
        <div className="App-playlist">
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
            <SearchResults searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
