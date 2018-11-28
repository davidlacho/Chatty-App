# ShireTalk (AKA ChattyApp)

## Project Description.

 ShireTalk allows hobbits to communicate with each other without having to register accounts. It uses React, a popular front-end library as well as tools for Node including Webpack and Babel.

## Features
* Primarily a client-side SPA (single-page app) built with ReactJS, based on the HTML and CSS provided
* Contains a chat log displaying messages and notifications
* Contains an input field to change your name and an input field to send a message
* The client-side app communicates with a server via WebSockets for multi-user real-time updates
* No persistent database is involved; the focus is on the client-side experience
* When any connected user sends a chat message, all connected users receive and display the message
* When any connected user changes their name, all connected users are notified of the name change
* Notifications are styled differently from chat messages
* Header will display the count of connected users. When the number of connected users changes, this count will be updated for all connected users
* Different users' names will each be coloured differently. The colouring is consistent between connected user instances.

## Technical Specifications
### Stack
* React, Webpack with Babel, JSX, ES6, webpack dev server, WebSockets using Node package ws on the server-side, and native WebSocket on client side

### Installation
Clone this repository to your local disk:
```
git clone https://github.com/fiveache/Chatty-App.git
```
change into directory `Chatty-App`
```
cd Chatty-App
```
Install dependencies using `npm`:
```
npm install
```
change into directory `chatty-server`
```
cd chatty-server
```
Install dependencies using `npm`:
```
npm install
```
You will need to run two servers in different tabs. In the first tab while still in the `chatty-server`, boot up your Websocket server by running:
```
npm run start
```
Open a second tab, and change into directory `Chatty-App`
```
cd ..
```
In the second tab, boot up your Node server by running:
```
npm run start
```

Visit the site [localhost:3000](localhost:3000).

## Dependencies
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* css-loader
* nodemon
* node-sass
* sass-loader
* sockjs-client
* style-loader
* webpack
* webpack-dev-server
* react
* react-dom

## Skills Demonstrated


## Screenshot
!["Screenshot"](https://github.com/fiveache/Chatty-App/blob/master/docs/screenshot.png?raw=true)
