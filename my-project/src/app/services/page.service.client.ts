import {Page} from '../models/page.model';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  createPage(websiteId: string, page) {
    // page._id = String(Math.floor(Math.random() * 1000) + 1);
    page.websiteId = websiteId;
    return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPageByWebsiteId(websiteId: string) {
    return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  findPageById(pageId: string) {
    return this.http.get(this.baseUrl + '/api/page/' + pageId)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updatePage(pageId: string, newPage) {
    return this.http.put(this.baseUrl + '/api/page/' + pageId, newPage)
      .map((res: Response) => {
        return res.json();
      });
  }

  deletePage(pageId: string) {
    return this.http.delete(this.baseUrl + '/api/page/' + pageId)
      .map((res: Response) => {
        return res.json();
      });
  }
}
