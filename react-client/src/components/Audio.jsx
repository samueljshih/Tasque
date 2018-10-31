import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedColor: '' };
    this.chooseSound = color => this.setState({ selectedColor: color });
    this.playAudio = () => {
      this.song.play();
    };
    this.stopAudio = () => {
      console.log('Stop');
      this.song.pause();
    };
  }
  render() {
    var randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    var musicUrl = `https://s3-us-west-1.amazonaws.com/samshihsongs/studyMix${randomNumber}.mp3`;
    return (
      <div className="audioPlayer">
        <audio
          ref={song => {
            this.song = song;
          }}
        >
          <source src={musicUrl} type="audio/mpeg" />
        </audio>
        <button className="btn playTune" onClick={this.playAudio}>
          Play Da Tune
        </button>
        <button className="btn pauseTune" onClick={this.stopAudio}>
          Pause Da Tune
        </button>
      </div>
    );
  }
}

export default Audio;
