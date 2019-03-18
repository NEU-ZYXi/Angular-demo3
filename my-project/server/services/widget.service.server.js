module.exports = app => {

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
  var upload = multer({dest: __dirname+'/../../src/assets/uploads'});

  app.post("/api/page/:pid/widget", createWidget);
  app.get("/api/page/:pid/widget", findAllWidgersForPage);
  app.get("/api/widget/:wgid", findWidgetById);
  app.put("/api/widget/:wgid", updateWidget);
  app.delete("/api/widget/:wgid", deleteWidget);
  app.put("/api/page/:pid/widget", reorderWidgets);
  app.post("/api/upload", upload.single('avatar'), uploadImage);

  function findWidgetsByPageId(pageId) {
    var ans = [];
    for (var i = 0; i < widgets.length; ++i) {
      if (widgets[i].pageId === pageId) {
        ans.push(widgets[i]);
      }
    }
    return ans;
  }

  function findWidgetByWidgetId(widgetId) {
    for (var i = 0; i < widgets.length; ++i) {
      if (widgets[i]._id === widgetId) {
        return widgets[i];
      }
    }
  }

  function createWidget(req, res) {
    const pid = req.params['pid'];
    var widget = req.body;
    if (url !== '') {
      widget.url = url;
      url = '';
    }
    widgets.push(widget);
    var ans = findWidgetsByPageId(pid);
    res.json(ans);
  }

  function findAllWidgersForPage(req, res) {
    const pid = req.params['pid'];
    var widgets = findWidgetsByPageId(pid);
    res.json(widgets);
  }

  function findWidgetById(req, res) {
    const wgid = req.params['wgid'];
    var widget = widgets.find((widget) => {
      return widget._id === wgid;
    });
    res.json(widget);
  }

  function updateWidget(req, res) {
    const wgid = req.params["wgid"];
    var widget = req.body;
    for (var i = 0; i < widgets.length; ++i) {
      if (widgets[i]._id === wgid) {
          if (widgets[i].widgetType === 'HEADING') {
            widgets[i].size = widget.size;
            widgets[i].text = widget.text;
          } else if (widgets[i].widgetType === 'IMAGE') {
            widgets[i].width = widget.width;
            widgets[i].url = widget.url;
            if (url !== '') {
              widget[i].url = url;
              url = '';
            }
          } else if (widgets[i].widgetType === 'YOUTUBE') {
            widgets[i].width = widget.width;
            widgets[i].url = widget.url;
          }
        res.status(200).send(widget);
        return;
      }
    }
    res.status(404).send("Widget Not Found");
  }

  function deleteWidget(req, res) {
    const wgid = req.params["wgid"];
    widgets.forEach((widget, index) => {
      if (widget._id === wgid) {
        widgets.splice(index, 1);
      }
    });
    res.json(widgets);
  }

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId === 'undefined' ? String(Math.floor(Math.random() * 1000) + 1) : req.body.widgetId;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    var width = req.body.width;
    var myFile = req.file;
    var originalname = myFile.originalname;
    var filename = myFile.filename;
    var path = myFile.path;
    var destination = myFile.destination;
    var size = myFile.size;
    var mimetype = myFile.mimetype;
    url = 'assets/uploads/' + filename;
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

  function reorderWidgets(req, res) {
    var start = parseInt(req.query['start']);
    var end = parseInt(req.query['end']);
    array_swap(widgets, start, end);
    res.sendStatus(200);
  }

};
