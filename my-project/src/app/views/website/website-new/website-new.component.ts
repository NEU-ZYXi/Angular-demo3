import {Component, OnInit, ViewChild} from '@angular/core';
import {Website} from '../../../models/website.model';
import {NgForm} from '@angular/forms';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  newWebsite;
  newWebsiteName: string;
  newWebsiteDescription: string;
  websites: Website[];
  @ViewChild('f') websiteForm: NgForm;

  constructor(private websiteService: WebsiteService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.websiteService.findWebsitesByUser(this.userId)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
        }
      );
  }

  onSubmit() {
    this.newWebsite = { name: this.newWebsiteName, developerId: this.userId, description: this.newWebsiteDescription};
    this.websiteService.createWebsite(this.userId, this.newWebsite)
      .subscribe(
        (websites: Website[]) => {
          this.websites = websites;
          this.router.navigate(['../'], {relativeTo: this.route});
        }
      );
  }
}
