import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  widgetId: string;
  pageId: string;
  widget;
  newWidget;
  newWidgetName: string;
  newWidgetText: string = '';
  newWidgetSize: number = null;
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
      this.newWidget = {name: this.newWidgetName, size: this.newWidgetSize, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HEADING'};
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
      if (this.newWidgetSize === null) {
        this.newWidgetSize = this.widget.size;
      }
      // console.log(this.newWidgetText);
      this.newWidget = {name: this.newWidgetName, size: this.newWidgetSize, text: this.newWidgetText, pageId: this.pageId, widgetType: 'HEADING'};
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
