module.exports = app => {

  var websiteModel = require('../models/website/website.model.server');

  var websites = [
    {_id: "123", name: "Facebook", developerId: "456", description: "Lorem"},
    {_id: "234", name: "Tweeter", developerId: "456", description: "Lorem"},
    {_id: "456", name: "Gizmodo", developerId: "456", description: "Lorem"},
    {_id: "890", name: "Go", developerId: "123", description: "Lorem"},
    {_id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem"},
    {_id: "678", name: "Checkers", developerId: "123", description: "Lorem"},
    {_id: "789", name: "Chess", developerId: "234", description: "Lorem"},
  ];

  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.get("/api/website/:wid", findWebsiteById);
  app.put("/api/website/:wid", updateWebsite);
  app.delete("/api/website/:wid", deleteWebsite);

  function createWebsite(req, res) {
    const uid = req.params['uid'];
    var website = req.body;
    websiteModel.createWebsite(uid, website)
      .then((websites) => {
        res.json(websites);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllWebsitesForUser(req, res) {
    const uid = req.params['uid'];
    websiteModel.findAllWebsitesForUser(uid)
      .then((websites) => {
        res.json(websites);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findWebsiteById(req, res) {
    const wid = req.params['wid'];
    websiteModel.findWebsiteById(wid)
      .then((website) => {
        res.json(website);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function updateWebsite(req, res) {
    const wid = req.params["wid"];
    var website = req.body;
    websiteModel.updateWebsite(wid, website)
      .then(website => {
        res.json(website);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deleteWebsite(req, res) {
    const wid = req.params["wid"];
    websiteModel.deleteWebsite(wid)
      .then((websites) => {
        res.json(websites);
      }, (error) => {
        res.status(400).send(error);
      });
  }

};
