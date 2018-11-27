import React from 'react';

function ChatBar(props){
  return (
    <footer>
      <form className = "chatbar" onKeyPress={props.newMessage} >
          <input className = "chatbar-username" name='user' placeholder = "Your Name (Optional)" / >
          <input className = "chatbar-message"  name='content' placeholder = "Type a message and hit ENTER" / >
      </form>
    </footer>
  );
}

export default ChatBar;
