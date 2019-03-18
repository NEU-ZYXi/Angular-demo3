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
  page: Page = {_id: "", name: "", websiteId: "", description: ""};

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
    this.pageService.findPageById(this.pageId)
      .subscribe(
        (page: Page) => {
          this.page = page;
        }
      );
  }

  onEditPage() {
    this.pageService.updatePage(this.pageId, this.page)
      .subscribe(
        (page: Page) => {
          this.page = page;
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }

  onDelete() {
    this.pageService.deletePage(this.pageId)
      .subscribe(
        (pages: Page[]) => {
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }

}
