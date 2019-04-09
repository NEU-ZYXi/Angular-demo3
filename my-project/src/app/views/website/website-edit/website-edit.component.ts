import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  userId: string;
  websiteId: string;
  website = { name: "", developerId: "", description: ""};
  websites: Website[];
  websiteIdObs = new Subject<string>();
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.route.params
      .subscribe(
        (params: Params) => {
          this.websiteId = params['wid'];
        }
      );
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
    this.websiteService.findWebsiteById(this.websiteId)
      .subscribe(
        (website: Website) => {
          this.website = website;
        }
      );

    // dynamically change the current website info of website-edit inside website-edit page
    this.websiteIdObs
      .subscribe(
        (websiteId: string) => {
          this.websiteId = websiteId;
          this.websiteService.findWebsiteById(this.websiteId)
            .subscribe(
              (website: Website) => {
                this.website = website;
              }
            );
        }
    );
  }

  onChangeWebsite(id) {
    this.websiteIdObs.next(id);
  }

  onEditWebsite() {
    this.websiteService.updateWebsite(this.websiteId, this.website)
      .subscribe(
        (website: Website) => {
          this.website = website;
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }

  onDelete() {
    this.websiteService.deleteWebsite(this.websiteId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }

}
