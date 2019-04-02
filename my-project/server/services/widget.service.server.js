module.exports = app => {

  var widgetModel = require('../models/widget/widget.model.server');

  var widgets = [
    {_id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
    {_id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    {_id: "345", widgetType: "IMAGE", pageId: "321", width: "500", url: "http://lorempixel.com/400/200"},
    {_id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
    {_id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    {_id: "678", widgetType: "YOUTUBE", pageId: "321", width: "500", url: "https://www.youtube.com//embed/eSLe4HuKuK0"},
    {_id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
  ];
  var url = '';
  var multer = require('multer');
  var upload = multer({dest: __dirname+'/../../dist/my-project/assets/uploads'});

  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgetsForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.put("/api/page/:pid/widget", reorderWidgets);
  app.post("/api/upload", upload.single('avatar'), uploadImage);

  function createWidget(req, res) {
    const pid = req.params['pid'];
    var widget = req.body;
    if (url !== '') {
      widget.url = url;
      url = '';
    }
    widgetModel.createWidget(pid, widget)
      .then((widgets) => {
        res.json(widgets);
      }, (error) => {
        if (error) {
          res.status(400).send(error);
        }
      });
  }

  function findAllWidgetsForPage(req, res) {
    const pid = req.params['pid'];
    widgetModel.findAllWidgetsForPage(pid)
      .then((widgets) => {
        res.json(widgets);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function findWidgetById(req, res) {
    const wgid = req.params['wgid'];
    widgetModel.findWidgetById(wgid)
      .then((widget) => {
        res.json(widget);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function updateWidget(req, res) {
    const wgid = req.params["wgid"];
    var widget = req.body;
    if (url !== '') {
      widget.url = url;
      url = '';
    }
    widgetModel.updateWidget(wgid, widget)
      .then(widget => {
        res.json(widget);
      }, error => {
        res.status(400).send(error);
      });
  }

  function deleteWidget(req, res) {
    const wgid = req.params["wgid"];
    widgetModel.deleteWidget(wgid)
      .then((widget) => {
        res.json(widget);
      }, (error) => {
        res.status(400).send(error);
      });
  }

  function uploadImage(req, res) {
    var myFile = req.file;
    var filename = myFile.filename;
    url = 'assets/uploads/' + filename;
  }

  function reorderWidgets(req, res) {
    var start = parseInt(req.query['start']);
    var end = parseInt(req.query['end']);
    array_swap(widgets, start, end);
    res.sendStatus(200);
  }

};
