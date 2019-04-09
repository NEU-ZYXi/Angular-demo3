module.exports = app => {

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;
  var userModel = require('../models/user/user.model.server');
  var bcrypt = require('bcrypt-nodejs');

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

  app.post("/api/login", passport.authenticate('local'), login);
  app.post("/api/logout", logout);
  app.post("/api/register", register);
  app.post("/api/loggedIn", loggedIn);

  var facebookConfig = {
    clientID: '644451369317015',
    // clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: '9b84bcfec3b28d0f4172f6e326874072',
    // clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "https://webdev-cs5610-zhenyuan.herokuapp.com/auth/facebook/callback"
  };
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebook(profile.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          var names = profile.displayName.split(" ");
          var newFacebookUser = {
            lastName: names[1],
            firstName: names[0],
            email: profile.emails ? profile.emails[0].value : "",
            facebook: {
              id: profile.id,
              token: token
            }
          };
          userModel.createUser(newFacebookUser)
            .then((user) => {
              return done(null, user);
            });
        }
      });
  }

  app.get('/auth/facebook', function authenticateFacebook (req, res, next) {
    req.session.returnTo = '/#' + req.query.returnTo;
    next();
  },
    passport.authenticate('facebook', {scope: 'email'}));
  app.get("/auth/facebook/callback", function (req, res, next) {
    var authenticator = passport.authenticate('facebook', {
      successRedirect: req.session.returnTo,
      failureRedirect: '/'
    });
    delete req.session.returnTo;
    authenticator(req, res, next);
  });

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    userModel.findUserById(user._id)
      .then(user => {
        done(null, user);
      });
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      userModel.findUserByUsername(username)
        .then(user => {
          if (user.username === username && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            console.log("Incorrect Username or Password");
            return done(null, false);
          }
        });
    })
  );

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

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user)
      .then((user) => {
        res.json(user);
      });
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }


};
