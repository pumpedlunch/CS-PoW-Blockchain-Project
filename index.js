const jayson = require('jayson');
const {startMining, stopMining} = require('./mine.js');
const {PORT} = require('./config.js');

// create a server
const server = new jayson.Server({
  startMining: function(_, callback) {
    startMining();
    callback(null, 'start mining');
  },
  stopMining: function(_, callback) {
    console.log('trying to stop mining')
    stopMining();
    callback(null, 'stop mining!');
  }
});

server.http().listen(PORT);