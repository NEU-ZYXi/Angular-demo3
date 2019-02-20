import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subject} from 'rxjs';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: string;
  widgetId: string;
  widgetType: string;

  constructor(private widgetService: WidgetService, private route: ActivatedRoute) { }

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
        (widgetType: string) => {
          this.widgetType = widgetType;
        }
      );
  }

  onNewWidget(widgetType: string) {
    this.widgetService.chooseNewType(widgetType);
  }

}
