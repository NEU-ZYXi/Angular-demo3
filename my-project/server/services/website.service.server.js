module.exports = app => {

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

  function findWebsitesByUserId(userId) {
    var ans = [];
    for (var i = 0; i < websites.length; ++i) {
      if (websites[i].developerId === userId) {
        ans.push(websites[i]);
      }
    }
    return ans;
  }

  function createWebsite(req, res) {
    const uid = req.params['uid'];
    var website = req.body;
    websites.push(website);
    var ans = findWebsitesByUserId(uid);
    res.json(ans);
  }

  function findAllWebsitesForUser(req, res) {
    const uid = req.params['uid'];
    var websites = findWebsitesByUserId(uid);
    res.json(websites);
  }

  function findWebsiteById(req, res) {
    const wid = req.params['wid'];
    var website = websites.find((website) => {
      return website._id === wid;
    });
    res.json(website);
  }

  function updateWebsite(req, res) {
    const wid = req.params["wid"];
    var website = req.body;
    for (var i = 0; i < websites.length; ++i) {
      if (websites[i]._id === wid) {
        websites[i].name = website.name;
        websites[i].description = website.description;
        res.status(200).send(website);
        return;
      }
    }
    res.status(404).send("Website Not Found");
  }

  function deleteWebsite(req, res) {
    const wid = req.params["wid"];
    websites.forEach((website, index) => {
      if (website._id === wid) {
        websites.splice(index, 1);
      }
    });
    res.json(websites);
  }

};
