import {Component, OnDestroy, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  websiteId: string;
  pages: Page[];

  constructor(private pageService: PageService, private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.websiteId = params['wid'];
        }
      );
    this.pageService.findPageByWebsiteId(this.websiteId)
      .subscribe(
        (pages: Page[]) => {
          this.pages = pages;
        }
      );
  }

}
