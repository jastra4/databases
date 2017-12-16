var models = require('../models');

module.exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, result) {
        res.json(result);
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username];
      models.messages.post(params, function(err, result) {
        //res.sendStatus(201);
        res.json(result);
        res.end();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, result) {
        res.json(result);
        res.end();
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, result) {
        //res.sendStatus(201);
        res.json(result);
        res.end();
      });
    }
  }
};
