let server = require('../server');
let debug = require('debug','api-dam:server')

const port = 3000;

server.listen(port);
console.log('Server is running on port '+port);