import {Widget, WidgetHeading, WidgetHtml, WidgetImage, WidgetYoutube} from '../models/widget.model';
import {BehaviorSubject, Subject} from 'rxjs';
import {Page} from '../models/page.model';
import {text} from '@angular/core/src/render3';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';

@Injectable()
export class WidgetService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  private widgetChosen = new BehaviorSubject('DEFAULT');
  currentWidgetType = this.widgetChosen.asObservable();
  widgetTypes: string[] = [
    "Header", "Label", "HTML", "Text Input", "Link", "Button", "Image", "YouTube", "Data Table", "Repeater"
  ];
  editFlag = false;

  createWidget(pageId: string, widget: Widget) {
    widget._id = String(Math.floor(Math.random() * 1000) + 1);
    widget.pageId = pageId;
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWidgetsByPageId(pageId: string) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  findWidgetById(widgetId: string) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updateWidget(widgetId: string, newWidget: any) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, newWidget)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWidget(widgetId: string) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId)
      .map((res: Response) => {
        return res.json();
      });
  }

  chooseNewType(widgetType: string) {
    this.widgetChosen.next(widgetType);
  }

  reorderWidgets(start, end, pageId) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId + '/widget?start=' + start + '&end=' + end, '');
  }
}
