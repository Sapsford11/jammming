import React from 'react';
import Track from './Components/Track/Track.js';
import './TrackList.css';

class TrackList extends React.Component {
  render() {
    <div className="TrackList">
    this.props.tracks.map(tracks => {
      <Track
      track={track}
      key={track.id}
      />
      })
      <h3>{this.props.track.name}</h3>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
  }
}

export default TrackList;
