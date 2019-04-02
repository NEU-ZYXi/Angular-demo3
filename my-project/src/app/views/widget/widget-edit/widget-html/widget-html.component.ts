import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  widgetId: string;
  userId: string;
  pageId: string;
  widget;
  newWidget;
  newWidgetName: string;
  newWidgetText: string = '';
  editFlag = false;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.widgetId = params['wgid'];
          this.pageId = params['pid'];
        }
      );
    if (this.widgetId !== 'undefined') {
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widget: Widget) => {
            this.widget = widget;
          }
        );
    }
    this.editFlag = this.widgetService.editFlag;
  }

  onEditWidget() {
    if (this.widgetId === 'undefined') {
      this.newWidget = {name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HTML'};
      this.widgetService.createWidget(this.pageId, this.newWidget)
        .subscribe(
          (widgets: Widget[]) => {
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        );
    } else {
      if (this.newWidgetText === '') {
        this.newWidgetText = this.widget.text;
      }
      if (this.newWidgetName === '') {
        this.newWidgetName = this.widget.name;
      }
      // console.log(this.newWidgetText);
      this.newWidget = {name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HTML'};
      this.widgetService.updateWidget(this.widgetId, this.newWidget)
        .subscribe(
          (widget: Widget) => {
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        );
    }
  }

  onDelete() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (widgets: Widget[]) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }

}
