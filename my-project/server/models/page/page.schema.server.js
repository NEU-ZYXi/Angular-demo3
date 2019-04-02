var mongoose = require('mongoose');

var pageSchema = mongoose.Schema({
  name: String,
  title: String,
  description: String,
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Widget'}],
  websiteId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
  dateCreated: {type: Date, default: Date.now()}
}, {collection: 'pages'});

module.exports = pageSchema;
