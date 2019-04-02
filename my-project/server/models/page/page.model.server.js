var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');

var userModel = require('../user/user.model.server');
var websiteModel = require('../website/website.model.server');
var pageModel = mongoose.model("Pages", pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

module.exports = pageModel;

function createPage(websiteId, page) {
  return pageModel.create(page)
    .then((page) => {
      websiteModel.findWebsiteById(websiteId)
        .then((website) => {
          website.pages.push(page);
          websiteModel.updateWebsite(websiteId, website);
        });
      return page;
    });
}

function findAllPagesForWebsite(websiteId) {
  return pageModel.find({websiteId: websiteId});
}

function findPageById(id) {
  return pageModel.findById(id);
}

function updatePage(id, page) {
  return pageModel.findByIdAndUpdate(id, page).then();
}

function deletePage(id) {
  return pageModel.findByIdAndRemove(id);
}

