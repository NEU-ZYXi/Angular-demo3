import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  widgetId: string;
  pageId: string;
  widget;
  newWidget;
  newWidgetName: string;
  newWidgetText: string = '';
  newWidgetRows: number = null;
  newWidgetPlaceholder: string = '';
  newWidgetFormatted: boolean = null;
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
      this.widget.widgetType = 'TEXT INPUT';
      this.widgetService.createWidget(this.pageId, this.widget)
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
      if (this.newWidgetRows === null) {
        this.newWidgetRows = this.widget.rows;
      }
      if (this.newWidgetPlaceholder === '') {
        this.newWidgetPlaceholder = this.widget.placeholder;
      }
      if (this.newWidgetFormatted === null) {
        this.newWidgetFormatted = this.widget.formatted;
      }
      this.newWidget = {name: this.newWidgetName, text: this.newWidgetText, pageId: this.pageId, rows: this.newWidgetRows,
        placeholder: this.newWidgetPlaceholder, formatted: this.newWidgetFormatted, widgetType: 'TEXT INPUT'};
      console.log(this.newWidget);
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
