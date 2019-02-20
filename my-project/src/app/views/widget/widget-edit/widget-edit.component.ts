import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.model';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  widgetId: string;
  userId: string;
  widgetChosen: string;
  widget: Widget;

  constructor(private route: ActivatedRoute, private widgetService: WidgetService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widgetService.currentWidgetType
      .subscribe(
        (widgetChosen: string) => {
          this.widgetChosen = widgetChosen;
        }
      );
    // console.log(this.widgetId);
    if (this.widgetId !== 'undefined') {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
    }
  }

}
