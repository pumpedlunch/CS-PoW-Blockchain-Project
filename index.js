const jayson = require('jayson');
const {startMining, stopMining} = require('./mine.js');
const {PORT} = require('./config.js');

// create a server
const server = new jayson.Server({
  startMining: function(_, callback) {
    startMining();
    callback(null, 'mining started!');
  },
  stopMining: function(_, callback) {
    stopMining();
    callback(null, 'mining stopped!');
  }
});

server.http().listen(PORT);