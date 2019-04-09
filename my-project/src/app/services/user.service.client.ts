import {User} from '../models/user.model';

import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';

// @Injectable() cannot be missed since here we have http in constructor
@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http, private sharedService: SharedService, private router: Router) {}

  // all functions return an observable, .subscribe whenever used

  createUser(user) {
    // user._id = String(Math.floor(Math.random() * 1000) + 1);
    return this.http.post(this.baseUrl + '/api/user', user)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  findUserByUsername(username: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      })
  }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((res: Response) => {
        // important to check if response is empty since .json() cannot be called on empty
        return res.text() ? res.json() : undefined;
      });
  }

  updateUser(userId: string, newUser) {
    return this.http.put(this.baseUrl + '/api/user/' + userId, newUser)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteUser(userId: string) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId)
      .map((res: Response) => {
        return res.json();
      });
  }

  login(username: string, password: string) {
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, {withCredentials: true})
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  logout() {
    return this.http.post(this.baseUrl + '/api/logout', '', {withCredentials: true});
  }

  register(username, password){
    const user = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/register', user, {withCredentials: true})
      .map((res: Response) => {
        return res.json();
      });
  }

  loggedIn() {
    return this.http.post(this.baseUrl + '/api/loggedIn', '', {withCredentials: true})
      .map((res: Response) => {
        const user = res.json();
        if (user != 0) {
          this.sharedService.user = user;
          // console.log("service", this.sharedService.user);
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
  }
}
