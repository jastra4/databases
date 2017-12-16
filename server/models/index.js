var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var msgQuery = 'SELECT * FROM messages';
      db.query(msgQuery, function(err, result) {
        if (err) {
          console.log(err);
          //throw err;
        } else {
          callback(err, result);
        }
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var msgQuery = 'INSERT INTO messages(message, id_users) \
                      VALUE (?, (select id from users where name = ? limit 1))';
      db.query(msgQuery, params, function(err, result) {
        if (err) {
          console.log(err);
          //throw err;
        } else {
          callback(err, result);
        }
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var userQuery = 'SELECT * FROM users';
      db.query(userQuery, function(err, result) {
        if (err) {
          console.log(err);
          //throw err;
        } else {
          callback(err, result);
        }
      });
    },
    post: function (params, callback) {
      var userQuery = 'INSERT INTO users(name) VALUES (?)';
      db.query(userQuery, params, function(err, result) {
        if (err) {
          console.log(err);
          //throw err;
        } else {
          callback(err, result);
        }
      });
    }
  }
};

