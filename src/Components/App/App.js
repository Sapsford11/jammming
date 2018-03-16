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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track){
       for(let i=0; i<this.state.playlistTracks.length; i++){
         if (this.track.id === this.state.playlistTracks.id){
            alert('This song is already part of your playlist.')
            else this.playlistTracks.push(track);
         }
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
      this.Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
        this.setState({
          playlistName: 'New Playlist',
          searchResults: []
        });
      });
    }


  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    });
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
