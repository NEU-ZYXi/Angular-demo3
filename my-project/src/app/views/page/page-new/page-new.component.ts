import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Page} from '../../../models/page.model';
import {PageService} from '../../../services/page.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  websiteId: string;
  newPage;
  newPageName: string = '';
  newPageTitle: string;
  newPageDescription: string;

  constructor(private pageService: PageService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.websiteId = params['wid'];
        }
      );
  }

  onNewPage() {
    if (this.newPageName === '') {
      return false;
    } else {
      this.newPage = { name: this.newPageName, title: this.newPageTitle, websiteId: this.websiteId, description: this.newPageDescription};
      this.pageService.createPage(this.websiteId, this.newPage)
        .subscribe(
          (pages: Page[]) => {
            this.router.navigate(['../'], {relativeTo: this.route});
          }
        );
    }
  }

}
