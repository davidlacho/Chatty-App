import React, {Fragment, Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <Fragment>
        {
          this.props.message.type === 'incomingMessage' ?
          <div className = 'message'>
          <span className = 'message-username' style={{color: this.props.message.userColor}}> {this.props.message.username} < /span>
            <span className = 'message-content' >
            {this.props.message.content}
            {this.props.message.imgURL && <img src={this.props.message.imgURL} style={{maxWidth: '60%', display: 'block'}}/>}
            </span>
          </div>
          :
          <div className = 'message system' >
          {this.props.message.content}
          </div>
        }
      </Fragment>
    );
  }
}

export default Message;
