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

    this.addTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
  if (track.id !== this.state.playlistTracks)
      {
        this.state.playlistTracks = this.state.playlistTracks.push(track);
      }

  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({
      name: name
    })
  }

  savePlaylist() {
    let trackURIs = [];
  }

  search(term) {
    console.log(term);
  }


  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.state.search}/>
        <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.state.updatePlaylistName} onSave={this.state.savePlaylist} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
