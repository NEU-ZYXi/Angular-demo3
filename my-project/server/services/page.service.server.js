module.exports = app => {

  var pageModel = require('../models/page/page.model.server');

  var pages = [
    {_id: "321", name: "Post 1", websiteId: "456", description: "Lorem"},
    {_id: "432", name: "Post 2", websiteId: "456", description: "Lorem"},
    {_id: "543", name: "Post 3", websiteId: "456", description: "Lorem"}
  ];

  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  function createPage(req, res) {
    const wid = req.params['wid'];
    var page = req.body;
    pageModel.createPage(wid, page)
      .then((page) => {
        res.json(page);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllPagesForWebsite(req, res) {
    const wid = req.params['wid'];
    pageModel.findAllPagesForWebsite(wid)
      .then((pages) => {
        res.json(pages);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findPageById(req, res) {
    const pid = req.params['pid'];
    pageModel.findPageById(pid)
      .then((page) => {
        res.json(page);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function updatePage(req, res) {
    const pid = req.params["pid"];
    var page = req.body;
    pageModel.updatePage(pid, page)
      .then(page => {
        res.json(page);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deletePage(req, res) {
    const pid = req.params["pid"];
    pageModel.deletePage(pid)
      .then((pages) => {
        res.json(pages);
      }, (error) => {
        res.status(400).send(error);
      });
  }

};
