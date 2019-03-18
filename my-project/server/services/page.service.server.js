module.exports = app => {

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

  function findPagesByWebsiteId(websiteId) {
    var ans = [];
    for (var i = 0; i < pages.length; ++i) {
      if (pages[i].websiteId === websiteId) {
        ans.push(pages[i]);
      }
    }
    return ans;
  }

  function createPage(req, res) {
    const wid = req.params['wid'];
    var page = req.body;
    pages.push(page);
    var ans = findPagesByWebsiteId(wid);
    res.json(ans);
  }

  function findAllPagesForWebsite(req, res) {
    const wid = req.params['wid'];
    var pages = findPagesByWebsiteId(wid);
    res.json(pages);
  }

  function findPageById(req, res) {
    const pid = req.params['pid'];
    var page = pages.find((page) => {
      return page._id === pid;
    });
    res.json(page);
  }

  function updatePage(req, res) {
    const pid = req.params["pid"];
    var page = req.body;
    for (var i = 0; i < pages.length; ++i) {
      if (pages[i]._id === pid) {
        pages[i].name = page.name;
        pages[i].description = page.description;
        res.status(200).send(page);
        return;
      }
    }
    res.status(404).send("Page Not Found");
  }

  function deletePage(req, res) {
    const pid = req.params["pid"];
    pages.forEach((page, index) => {
      if (page._id === pid) {
        pages.splice(index, 1);
      }
    });
    res.json(pages);
  }

};
