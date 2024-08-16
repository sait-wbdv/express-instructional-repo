# README

This is an instructional repo for building a simple node express server. Look in the other branches for completed code examples for the following Instructions

## Project Setup

1. Set up new git repo (don't forget .gitignore)
2. Create a new npm project and install dependencies
3. Add a server.js, main.js, app.js, or index.js file (all of these are reasonable naming conventions)

## 1. Basic Server Routes

Server routes are the pathways of your website/application. They define how a server responds to different request from users.

### Passing data to specific routes

1. Initialize the express framework in your server.js file
   - call express in the file
   - set it up to listen on a port (3000 is commonly used)
2. Create get route for the root of the application
   - Pass along some data with `response.send()`
3. Create a route that passes an array of numbers
   - this is to experiment with api routes
4. Test your server
   - run `node main.js` (or whatever your server file is called)
   - pro tip: create your own script to run the server in your package.json file `"dev": "node main.js"

## 2. Server Middleware

Middleware intercepts requests before they reach the route handlers and allow you to do things with teh data before it's processed. This can be used to improve your code organization and functionality.
