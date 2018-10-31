import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import ChatBox from './ChatBot.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import DialogFlowBox from './DialogFlowBox.jsx';
import Audio from './Audio.jsx';
import axios from 'axios';
import { ApiAiClient } from 'api-ai-javascript';
var accessToken = '695d0edfee3e4a208d4eae6098cbb538';

var client = new ApiAiClient({ accessToken });

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      feed: []
    };
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  handleSendMessage(message) {
    var newMessage = {
      text: message
    };
    this.setState({ feed: [...this.state.feed, newMessage] });
  }

  componentDidMount() {
    // axios
    //   .get('https://api.api.ai/v1/query?', {
    //     headers: {
    //       Authorization: 'Bearer ' + accessToken,
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/json'
    //     },
    //     params: {
    //       v: '20150910',
    //       query: 'hello',
    //       lang: 'en',
    //       sessionId: '12322'
    //     }
    //   })
    //   .then(response => {
    //     console.log('Response', response.data.result.fulfillment.speech);
    //   })
    //   .catch(error => {
    //     console.log('Error', error);
    //   });
  }

  render() {
    const { feed } = this.state;
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/"
            render={() => (
              <div>
                <ChatBox feed={feed} sendMessage={this.handleSendMessage} />
                <DialogFlowBox />
                <Audio />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
