import React from 'react';
import Track from '../Track/Track.js';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    return (
    <div className="TrackList">
    this.props.tracks.map(tracks => {
      <tracks
      tracks={tracks}
      key={track.id}
      />
      })
      <h3>{this.props.track.name}</h3>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
  );
  }
}

export default TrackList;
