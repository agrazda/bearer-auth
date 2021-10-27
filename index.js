  
'use strict';

const server = require('./src/server.js')
const { db } = require('./src/auth/models/index.js');
const PORT = process.env.PORT;

// Start up DB Server
db.sync()
  .then(() => {

    // Start the web server
    server.start(PORT);
  });