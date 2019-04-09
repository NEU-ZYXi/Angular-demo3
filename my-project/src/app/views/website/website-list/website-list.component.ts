import {Component, OnDestroy, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: string;
  websites: Website[];

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
  }

}
