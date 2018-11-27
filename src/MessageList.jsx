import React, {Fragment, Component} from 'react';
import Message from './Message.jsx';

const messageArea = (messages) => {
  return (
    messages.map((message) => <Message message ={ message } />
    )
  );
}

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages : [
        {
          type: 'incomingMessage',
          content: 'I won\'t be impressed with technology until I can download food.',
          username: 'Anonymous1'
        },
        {
          type: 'incomingNotification',
          content: 'Anonymous1 changed their name to nomnom',
        },
        {
          type: 'incomingMessage',
          content: 'I wouldn\'t want to download Kraft Dinner. I\'d be scared of cheese packet loss.',
          username: 'Anonymous2'
        },
        {
          type: 'incomingMessage',
          content: '...',
          username: 'nomnom'
        },
        {
          type: 'incomingMessage',
          content: 'I\'d love to download a fried egg, but I\'m afraid encryption would scramble it',
          username: 'Anonymous2'
        },
        {
          type: 'incomingMessage',
          content: 'This isn\'t funny. You\'re not funny',
          username: 'nomnom'
        },
        {
          type: 'incomingNotification',
          content: 'Anonymous2 changed their name to NotFunny',
        },
      ]
    };
  }

  render() {
    return (
      <Fragment>
      <main className = "messages" >
        {messageArea(this.state.messages)}
      </main>
      </Fragment>
    );
  }

}

export default MessageList;
