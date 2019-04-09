import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  widgetId: string;
  pageId: string;
  widget;
  newWidget;
  newWidgetName: string;
  newWidgetText: string = '';
  newWidgetWidth: string = '';
  newWidgetURL: string = '';
  editFlag = false;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
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
      this.newWidget = {name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'YOUTUBE'};
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
      if (this.newWidgetWidth === '') {
        this.newWidgetWidth = this.widget.width;
      }
      if (this.newWidgetURL === '') {
        this.newWidgetURL = this.widget.url;
      }
      this.newWidget = {name: this.newWidgetName, width: this.newWidgetWidth, text: this.newWidgetText, url: this.newWidgetURL, pageId: this.pageId, widgetType: 'YOUTUBE'};
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
