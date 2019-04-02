import {Website} from '../models/website.model';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WebsiteService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  createWebsite(userId: string, website: Website) {
    // website._id = String(Math.floor(Math.random() * 1000) + 1);
    website.developerId = userId;
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
      .map((res: Response) => {
        return res.json();
      });
  }

  findWebsitesByUser(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/website')
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  findWebsiteById(websiteId: string) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updateWebsite(websiteId: string, newWebsite) {
    return this.http.put(this.baseUrl + '/api/website/' + websiteId, newWebsite)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteWebsite(websiteId: string) {
    return this.http.delete(this.baseUrl + '/api/website/' + websiteId)
      .map((res: Response) => {
        return res.json();
      });
  }
}
