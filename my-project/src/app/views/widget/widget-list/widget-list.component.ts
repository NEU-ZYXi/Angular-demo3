import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Params} from '@angular/router';
import {Widget} from '../../../models/widget.model';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  pageId: string;
  widgets: Widget[];

  constructor(private widgetService: WidgetService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.pageId = params['pid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pageId)
      .subscribe(
        (widgets: Widget[]) => {
          this.widgets = widgets;
        }
      );
  }

  reorderWidgets(indexes) {
    this.widgetService.reorderWidgets(indexes.start, indexes.end, this.pageId)
      .subscribe(
      );
  }

}
