var mongoose = require('mongoose');
var websiteSchema = require('./website.schema.server');

var userModel = require('../user/user.model.server');
var websiteModel = mongoose.model("Websites", websiteSchema);

websiteModel.createWebsite = createWebsite;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(userId, website) {
  return websiteModel.create(website)
    .then((website) => {
      userModel.findUserById(userId)
        .then((user) => {
          user.websites.push(website);
          userModel.updateUser(userId, user);
        });
      return website;
    });
}

function findAllWebsitesForUser(userId) {
  return websiteModel.find({developerId: userId});
}

function findWebsiteById(id) {
  return websiteModel.findById(id);
}

function updateWebsite(id, website) {
  return websiteModel.findByIdAndUpdate(id, website).then();
}

function deleteWebsite(id) {
  return websiteModel.findByIdAndRemove(id);
}

