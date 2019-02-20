import { Component, OnInit } from '@angular/core';
import {Page} from '../../../models/page.model';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  pageId: string;
  page: Page;
  newPage: Page;
  newPageName: string = '';
  newPageTitle: string = '';

  constructor(private pageService: PageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
          this.websiteId = params['wid'];
          this.pageId = params['pid'];
        }
      );
    this.page = this.pageService.findPageNyId(this.pageId);
  }

  onEditPage() {
    if (this.newPageName === '') {
      this.newPageName = this.page.name;
    }
    // if (this.newPageTitle === '') {
    //   this.newPageTitle = this.page.title;
    // }
    this.newPage = {_id: this.pageId, name: this.newPageName, websiteId: this.websiteId, description: this.page.description};
    this.pageService.updatePage(this.pageId, this.newPage);
    this.router.navigate(['../'], {relativeTo: this.route});
  }


  onDelete() {
    this.pageService.deletePage(this.pageId);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
