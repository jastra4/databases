var models = require('../models');

module.exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) {
          console.log('error');
        } else {
          res.json(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username];
      models.messages.post(params, function(err, result) {
        console.log('message post: ', params);
        res.json(result);
        res.end();
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, result) {
        if (err) {
          console.log('error');
        } else {
          res.sendStatus(200, headers);
          res.json(result);
        }
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
