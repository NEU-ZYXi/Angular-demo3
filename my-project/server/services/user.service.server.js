module.exports = app => {

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
    users.push(user);
    res.json(user);
  }

  function findUserByUsername(req, res) {
    const username = req.query["username"];
    var user = null;
    if (username) {
      user = users.find((user) => {
        return user.username === username;
      });
    }
    res.json(user);
  }

  function findUserById(req, res) {
    const uid = req.params['uid'];
    var user = users.find((user) => {
      return user._id === uid;
    });
    res.json(user);
  }

  function findUserByCredentials(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    var user = null;
    if (username && password) {
      user = users.find((user) => {
        return user.username === username && user.password === password;
      });
    }
    res.json(user);
  }

  function updateUser(req, res) {
    const uid = req.params["uid"];
    var user = req.body;
    for (var i = 0; i < users.length; ++i) {
      if (users[i]._id === uid) {
        // username is not updated
        users[i].firstName = user.firstName;
        users[i].lastName = user.lastName;
        res.status(200).send(user);
        return;
      }
    }
    res.status(404).send("User Not Found");
  }

  function deleteUser(req, res) {
    const uid = req.params["uid"];
    users.forEach((user, index) => {
      if (user._id === userId) {
        users.splice(index, 1);
      }
    });
  }

};
