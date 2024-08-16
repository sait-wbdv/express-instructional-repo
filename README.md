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

Middleware intercepts requests before they reach the route handlers and allow you to do things with the data before it's processed. This can be used to improve your code organization and functionality.

### Custom Logger Middleware

1. create a currentTime function to format the time output when logging (you can use npm packages to simplify this step)
2. create a logger middleware function
   - the logger should take the req, res, and next paraeters
   - use it to log specific information about the requests and responses
3. apply the logger with `app.use(logger)`

### Server Static Assets (built in Middlware)

1. create a `/public` folder and put static assets like css or images into it
2. use the built in `express.static()` middleware to set up your public directory to serve its assets
3. pass the path module into express.static and run that in app.use()
4. you should now be able to access your assets from the root of your project

## 3. Serving Page Routes

In step 1 we served raw data, here we'll serve actual html pages on their respective routes.

### Cleanup tasks (optional)

- Extract helper functions and middleware into `./utils/` and `./middleware/ for cleaner code
- Import the functions into the main.js file

### Serving HTML Pages

1. create a pages directory and add your html pages (examples use index and about)
2. for each GET request create a route to pass the pages with
3. pass the pages to the routes using `response.sendFile()` and `path.join(\_\_dirname, "pages", "page-name.html")
4. Create error handling for 404 and 500 errors

### Post Routes

1. create an input form on one of your pages
2. in the server file, create a `app.post()` route for the corresponding page
3. set the message to equal `req.body.variableName`
4. To indicate to the user that the form has been received, send a message

## 4. Advanced Routing

Serving routes with `app.get()` etc in the main server file is good for small projects and examples, but for anything bigger, you'll likely want to use the express router and structure your code to make it more maintainable.

### Objectives

- create server routes that use the express router
- group the route actions in each's own route file

### Set up your router directory

1. Create a `./routes/` directory
2. Create a `./routes/index.js` file as the main router hub
3. Create router files for each route like `./routes/home.js`
4. import the router files into your router hub file
   - ie: `const homeRouter = require('./home')`
   - `module.exports = {homeRouter}` at the end of the file
5. import the routes into the main server file at the project root
   - const { homeRouter} = require("./routes")
6. pass the routes to their main routes. ie: `app.use("/", homeRouter)

### Extract router content to `/routes/`

1. In each router file `./routes/home.js` extract the http method code that was written in the earlier stages
2. Import the express router `const router = express.Router()` (make sure your other imports are there as well)
3. change `app.get()` to `router.get()` (and same for any other http method)
4. export the router at the end of the file `module.exports = router`

## 5. Dynamic Routes

Dynamic routes are created based on the content passed to them. For instance, if you pass an array of users, a dynamic route would create a page for each user without you having to set up individual pages as done in steps 3 and 4.

### Setup

- Create an array of data to serve (ie: users, products...)
- this can be done in a `./data/users.js` file at root and then imported, or it can be an array in the router file

### Serving A list of users

- create a `./routes/users.js` file to serve the array of data from
- This follows the same approach as done in the first 2 stpes of these instructions. You'll serve the array of data to a route such as `/users/`

### Dynamically Serve individual routes

1. create a get route in the `users` file with a router parameter such as `router.get("/:userId", (req, res) => {...})
2. Compare the url parameter against the id in the data
3. If they match, serve that information

#### Serving html dynamically

There's a few ways to do this, and much of this in modern projects is done with something like React, Vue, or Angular. For now, we'll just serve some html content directly from the router

1. In your dynamic route, create a new variable and fill it with a template literal of html code, put information from the data into this using template literals variables
2. if the user is a match to the url parameter, than serve this information

### Creating Slugs for route parameters

- searching by id's is unintuitive for most people
- you can slugify something like a user name. Ie: "Francis Garbanzo" can be slugified into "francis-garbanzo" by removing the capitals and replacing spaces with "-"
- Create a utils function or import the npm package to slugify (provided code uses a custom solution with regular expressions)
- Then validate that the slugified version of the user name is equal to the route parameter
- Use this with an if statement to determine when to serve which data (and when to say "Not Found" etc)

### Cleanup and Error handling

- When everything is working as you want it to, clean up your code by:
  - removing unused imports and variables
  - create spaces between segments of code as needed
  - add/remove comments as needed
  - extract functions into utils or middleware
- Adding error handling:
  - consider what types of things could go wrong and add error handling accordingly
  - make sure to account especially for file not found and server errors

---

## Done!

That concludes all the topics for this lesson. You can combine these techniques and ideas in different ways to get different results. Remember that Node Express is an unopinionated framework which allows you to organize it however you want. This freedom also makes it easy to wreck your code.

I recommend that you establish a system and a pattern for updating your code (as has been demonstrated in these instructions regarding creating and refactoring). Make sure to check that things work as expected whenever you change things, extract or update imports.
