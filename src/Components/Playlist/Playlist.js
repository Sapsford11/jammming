import React from 'react';
import TrackList from '../TrackList/TrackList';
import Modal from '../Modal/Modal';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  // Triggers the name change to the playlist.
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick() {
    this.props.onSave();
    this.toggleModal();
  }

  render() {
    return (
    <div className="Playlist">
      <input value={this.props.playlistName} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
      <a className="Playlist-save" onClick={this.handleClick}>SAVE TO SPOTIFY</a>
      <Modal show={this.state.isOpen} onClose={this.toggleModal}>
        <p>Your playlist was saved successfully</p>
      </Modal>
      </div>
    );
  }
}

export default Playlist;
