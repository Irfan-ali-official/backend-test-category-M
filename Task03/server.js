const http = require('http');
const { parse } = require('url');
const { createReadStream, writeFileSync } = require('fs');

// Hardcoded array of user objects
let users = [
  { id: 1, name: 'Irfan Ali', age: 29 },
  { id: 2, name: 'Abdul Sattar', age: 20 },
  { id: 3, name: 'Sadam Hussain', age: 18 },
];

const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url, true);
  if(pathname==="/" && req.method==="GET"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Node.js server!');

 }
  else if (pathname === '/users' && req.method === 'GET') {
    // GET /users - Return array of user objects
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } else if (pathname.startsWith('/users/') && req.method === 'GET') {
    const id = parseInt(pathname.slice(7));
    const user = users.find((user) => user.id === id);

    if (user) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'User not found' }));
    }
  } else if (pathname === '/users' && req.method === 'POST') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name, age } = JSON.parse(body);
      const newUser = {
        id: users.length + 1,
        name,
        age,
      };

      users.push(newUser);

      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 201;
      res.end(JSON.stringify(newUser));
    });
  } else if (pathname.startsWith('/users/') && req.method === 'PUT') {
    const id = parseInt(pathname.slice(7));
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name, age } = JSON.parse(body);

      let user = users.find((user) => user.id === id);

      if (user) {
        user.name = name || user.name;
        user.age = age || user.age;

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        res.end(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'User not found' }));
      }
    });
  } else if (pathname.startsWith('/users/') && req.method === 'DELETE') {
    const id = parseInt(pathname.slice(7));

    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
      users.splice(index, 1);
      res.statusCode = 204;
      res.end();
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'User not found' }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Path not found' }));
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at port ${port}!`);
});
