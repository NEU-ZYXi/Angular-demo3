var mongoose = require('mongoose');

var widgetSchema = mongoose.Schema({
  pageId: {type: mongoose.Schema.Types.ObjectId, ref: "Page"},
  widgetType: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'TEXT INPUT'],
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  className: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date.now()}
}, {collection: "widgets"});

module.exports = widgetSchema;
