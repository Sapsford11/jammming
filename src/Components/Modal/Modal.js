import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {
    /* To test if the show switches from false to true when button is clicked */
    console.log(this.props.show);
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
      <h3 className="seperator">{`Your playlist ${this.props.playlistName} was saved successfully!`}</h3>
          <button className="close-button" onClick={this.props.onClose}>OK</button>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
