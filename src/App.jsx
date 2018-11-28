import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import uuidv4 from 'uuid/v4';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Anonymous'},
      ws : '',
      messages: [],
      currentConnections: 0,
    };
    this.newMessage = this.newMessage.bind(this);
    this.endOfMessages = React.createRef();
  }

  componentDidMount() {
    const ws = new WebSocket('ws://localhost:3001');

    ws.onmessage = (e) => {
      const newMessage = JSON.parse(e.data);
      if (newMessage.connections) {
        this.setState({currentConnections : newMessage.connections});
      } else {
        this.setState({messages: [... this.state.messages, newMessage]});
      }
    }
    this.setState({ws});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentConnections > prevState.currentConnections) {
      const newNotification ={
        type: 'incomingNotification',
        content : 'A new user has joined the chat.',
        id: uuidv4(),
      }
      this.setState({messages: [... this.state.messages, newNotification]});
    }
    if (this.state.currentConnections < prevState.currentConnections) {
      const newNotification ={
        type: 'incomingNotification',
        content : 'A user has left the chat.',
        id: uuidv4(),
      }
      this.setState({messages: [... this.state.messages, newNotification]});
    }
    this.endOfMessages.current.scrollIntoView({behavior: 'smooth'});
  }

  newMessage(event) {
    if (event.key == 'Enter') {
      let user = event.currentTarget.user.value;
      if(user && user !== this.state.currentUser.name) {
        const newNotification ={
          type: 'incomingNotification',
          content : `${this.state.currentUser.name} changed their name to ${user}`,
        };
        this.state.ws.send(JSON.stringify(newNotification));
        this.setState({currentUser: {name : user }});
      } else {
        user = this.state.currentUser.name;
      }

      if (event.currentTarget.content.value.length) {
        const newMessage ={
          type: 'incomingMessage',
          username: user,
          content : event.currentTarget.content.value,
        };
        this.state.ws.send(JSON.stringify(newMessage));
        event.currentTarget.content.value = '';
      }
    }
  }

  render() {
    return (
      <div>
      <nav className='navbar'>
        <a href='/' className='navbar-brand'>ShireTalk</a>
        <p className='navbar-users'>{this.state.currentConnections} Sneaky Hobbits Online</p>
      </nav>
      <MessageList messages={this.state.messages} />
      <div ref={this.endOfMessages}></div>
      <ChatBar currentUser={this.state.currentUser} messages={this.state.messages} newMessage={this.newMessage}/>
      </div>
    );
  }
}
export default App;
