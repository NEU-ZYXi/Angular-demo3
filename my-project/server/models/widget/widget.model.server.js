var mongoose = require('mongoose');
var widgetSchema = require('./widget.schema.server');

var userModel = require('../user/user.model.server');
var websiteModel = require('../website/website.model.server');
var pageModel = require('../page/page.model.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
  return widgetModel.create(widget)
    .then((widget) => {
      pageModel.findPageById(pageId)
        .then((page) => {
          page.widgets.push(widget);
          pageModel.updatePage(pageId, page);
        });
      return widget;
    });
}

function findAllWidgetsForPage(pageId) {
  return widgetModel.find({pageId: pageId});
}

function findWidgetById(id) {
  return widgetModel.findById(id);
}

function updateWidget(id, widget) {
  return widgetModel.findByIdAndUpdate(id, widget);
}

function deleteWidget(id) {
  return widgetModel.findByIdAndRemove(id);
}

function array_swap(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
}

function reorderWidget(pageId, start, end) {
  var widgets = widgetModel.findAllWidgetsForPage(pageId);
  array_swap(widgets, start, end);
  return widgets;
}

