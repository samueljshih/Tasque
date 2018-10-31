import React from 'react';
import DND from './DND.jsx';
import UserInput from './Input.jsx';
const update = require('immutability-helper');

var cards = [
  { id: 1, text: 'Eat' },
  { id: 2, text: 'Sleep' },
  { id: 3, text: 'Code' },
  { id: 4, text: 'Eat More' },
  { id: 5, text: 'Sleep More' },
  { id: 6, text: 'Code More' }
];

class ChatBox extends React.Component {
  constructor(props) {
    super();
  }

  handleSongLoading() {}

  handleSongPlaying() {}

  handleSongFinishedPlaying() {}

  render() {
    return (
      <div className="container">
        <div>
          <div className="cardsContainer" />
          <DND />
        </div>
      </div>
    );
  }
}

export default ChatBox;
