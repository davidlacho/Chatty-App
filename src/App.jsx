import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Data from './SampleData.json'

function makeid() {
var text = '';
var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for (var i = 0; i < 5; i++)
  text += possible.charAt(Math.floor(Math.random() * possible.length));
return text;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'David'},
      messages : Data.messages
    };
    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(event) {
    if (event.key == 'Enter') {
      const newMessage ={
        id: makeid(),
        type: 'incomingMessage',
        username: event.currentTarget.user.value || this.state.currentUser.name,
        content : event.currentTarget.content.value,
      };
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages});
      event.currentTarget.content.value = '';
    }
  }

  render() {
    return (
      <div>
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>Chatty</a>
      </nav>
      <MessageList messages={this.state.messages} />
      <ChatBar currentUser={this.state.currentUser} messages={this.state.messages} newMessage={this.newMessage}/>
      </div>
    );
  }
}
export default App;
