export interface Widget {
  _id: string;
  widgetType: string;
  pageId: string;
  name: string;
}

export class WidgetHeading implements Widget {
  _id: string;
  pageId: string;
  widgetType: string;
  size: number;
  text: string;
  name: string;

  constructor(_id: string, widgetType: string, pageId: string, size: number, text: string, name: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.size = size;
    this.text = text;
    this.name = name;
  }
}

export class WidgetImage implements Widget {
  _id: string;
  pageId: string;
  widgetType: string;
  width: string;
  url: string;
  name: string;

  constructor(_id: string, widgetType: string, pageId: string, width: string, url: string, name: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.width = width;
    this.url = url;
    this.name = name;
  }
}

export class WidgetHtml implements Widget {
  _id: string;
  pageId: string;
  widgetType: string;
  text: string;
  name: string;

  constructor(_id: string, widgetType: string, pageId: string, text: string, name: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.text = text;
    this.name = name;
  }
}

export class WidgetYoutube implements Widget {
  _id: string;
  pageId: string;
  widgetType: string;
  width: string;
  url: string;
  name: string;

  constructor(_id: string, widgetType: string, pageId: string, width: string, url: string, name: string) {
    this._id = _id;
    this.widgetType = widgetType;
    this.pageId = pageId;
    this.width = width;
    this.url = url;
    this.name = name;
  }
}


