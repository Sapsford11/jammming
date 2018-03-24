import React from 'react';
import TrackList from '../TrackList/TrackList';
import Modal from '../Modal/Modal';
import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = { isOpen: false };
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
    this.toggleModal();
    this.props.onSave();
  }

  render() {
    return (
    <div className="Playlist">
      <input value={this.props.playlistName} onChange={this.handleNameChange}/>
      <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
      <a className="Playlist-save" onClick={this.handleClick}>SAVE TO SPOTIFY</a>
      <Modal show={this.state.isOpen} onClose={this.toggleModal} playlistName={this.props.playlistName}>
      </Modal>
      </div>
    );
  }
}

export default Playlist;
