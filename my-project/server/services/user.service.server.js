module.exports = app => {

  var userModel = require('../models/user/user.model.server');

  var users = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jannunzi", lastName: "Annunzi"},
  ];

  app.post("/api/user", createUser);

  // order is important for same GET path
  app.get("/api/user", findUserByCredentials);
  app.get("/api/user", findUserByUsername);

  app.get("/api/user/:uid", findUserById);
  app.put("/api/user/:uid", updateUser);
  app.delete("/api/user/:uid", deleteUser);

  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user)
      .then((user) => {
        res.json(user);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findUserByUsername(req, res) {
    const username = req.query["username"];
    var user = null;
    if (username) {
      userModel.findUserByUsername(username)
        .then((user) => {
          res.json(user);
        }, (error) => {
          if (error) {
            res.status(400).send(error);
          }
        });
    }
  }

  function findUserById(req, res) {
    const uid = req.params['uid'];
    userModel.findUserById(uid)
      .then((user) => {
        res.json(user);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findUserByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    var user = null;
    if (username && password) {
      userModel.findUserByCredentials(username, password)
        .then((user) => {
          res.json(user);
        }, (error) => {
          res.status(400).send(error);
        });
    }
  }

  function updateUser(req, res) {
    const uid = req.params["uid"];
    var user = req.body;
    userModel.updateUser(uid, user)
      .then(user => {
        res.json(user);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deleteUser(req, res) {
    const uid = req.params["uid"];
    userModel.deleteUser(uid)
      .then();
  }

};
