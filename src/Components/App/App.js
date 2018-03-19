import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist!',
      playlistTracks: []
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  // Allows a user to enter a search term that will be hooked upto Spotify API.
  search(term) {
    Spotify.search(term).then(spotifySearch => {
      this.setState({
        searchResults: spotifySearch
      });
    });
  }

  // Saves playlist to user's Spotify account.
  savePlaylist() {
      let trackURIs = [];
      Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
        this.setState({
          playlistName: 'New Playlist',
          searchResults: []
        });
      });
    }

  // Allows a user to add a track to their playlist.
  addTrack(track)    {
    if (!this.state.playlistTracks.find(t => t.name === track.name))  {
        let tempList = this.state.playlistTracks.slice();
        tempList.push(track)
        this.setState({
          playlistTracks: tempList
        });
      }
  }

  // Allows a user to remove a track from their playlist.
  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(currentTrack => currentTrack.id !== track.id)
    });
  }

  // Allows user to update the name of the playlist.
  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    })
  }


  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
