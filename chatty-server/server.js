// server.js
const express = require('express');
const WebSockets = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new WebSockets.Server({
  server
});


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

const clientColors = {};
const colors = ['red', 'green', 'blue', 'orange', 'yellow'];

wss.on('connection', (ws) => {
  console.log('Client connected')

  ws.color= colors[Math.floor(Math.random() * colors.length)];

  wss.clients.forEach(function each(client) {
    const newNotification ={
      type: 'incomingNotification',
      content : 'A new user has joined the chat.',
      id: uuidv4(),
      connections: wss.clients.size,
    }
    client.send(JSON.stringify(newNotification));
  })

  ws.on('message', function incoming(data) {
    const parsedData = JSON.parse(data);
    parsedData['id'] = uuidv4();
    parsedData['userColor'] = ws.color;
    const regexImageUrl = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/gi;
    const imgURL = parsedData.content.match(regexImageUrl);
    if(imgURL) {
      parsedData['imgURL'] = imgURL[0];
      parsedData.content = parsedData.content.replace(regexImageUrl, '');
    }

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSockets.OPEN) {
        client.send(JSON.stringify(parsedData));
      }
    });


  });
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    wss.clients.forEach(function each(client) {
      const newNotification ={
        type: 'incomingNotification',
        content : 'A user has left the chat.',
        id: uuidv4(),
        connections: wss.clients.size,
      }
      client.send(JSON.stringify(newNotification));
    })
  });
});
