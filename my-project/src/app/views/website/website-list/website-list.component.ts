import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
        }
      );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
  }

}
