import React, {Fragment, Component} from 'react';
import Message from './Message.jsx';

const messageArea = (messages) => messages.map((message) => <Message message ={ message } key={ message.id } />);

class MessageList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Fragment>
      <main className = "messages" >
        {messageArea(this.props.messages)}
      </main>
      </Fragment>
    );
  }

}

export default MessageList;
