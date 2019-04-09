import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {WidgetService} from '../../../services/widget.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit, OnDestroy {

  pageId: string;
  widgetId: string;
  widgetType: string;
  widgetTypes: string[];
  newWidget;
  subscription: Subscription;

  constructor(private widgetService: WidgetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.pageId = params['pid'];
          this.widgetId = params['wgid'];
        }
      );
    this.widgetTypes = this.widgetService.widgetTypes;
    this.subscription = this.widgetService.currentWidgetType
      .subscribe(
        (widgetType: string) => {
          this.widgetType = widgetType;
        }
      );
  }

  onNewWidget(widgetType: string) {
    this.widgetService.chooseNewType(widgetType);
    this.newWidget = {name: '', text: '', widgetType: this.widgetType};
    this.widgetService.createWidget(this.pageId, this.newWidget)
      .subscribe(
        (widget => {
          this.router.navigate(['../', widget._id], {relativeTo: this.route});
        })
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
