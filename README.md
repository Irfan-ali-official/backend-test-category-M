Instructions: Please complete the following tasks to the best of your ability. You may use any online resources or documentation that you find necessary. Feel free to ask any clarifying questions if needed.

Task 1: Create a simple HTTP server using Node.js

Write a Node.js script that creates an HTTP server that listens on port 3000. The server should respond with the following message for any incoming request:

Welcome to the Node.js server!

Task 2: Create a module for handling file operations

Write a Node.js module that exports a function called readFileAsync which takes a file path as an argument and returns a promise that resolves with the contents of the file. Implement error handling to reject the promise if the file does not exist or if there is any other error while reading the file.

Task 3: Implement a basic RESTful API

Create a Node.js script that sets up a basic RESTful API with the following routes:

GET /users - Returns a JSON array of user objects. You can hardcode an array of user objects in the script.
GET /users/:id - Returns a JSON object of a user with the specified ID. If the user doesn't exist, return a 404 status code.
POST /users - Creates a new user. The request body should contain a JSON object with the user's data. Return the created user object with a 201 status code.
PUT /users/:id - Updates an existing user with the specified ID. The request body should contain a JSON object with the updated user's data. If the user doesn't exist, return a 404 status code.
DELETE /users/:id - Deletes an existing user with the specified ID. If the user doesn't exist, return a 404 status code. Return a 204 status code if the user is successfully deleted.