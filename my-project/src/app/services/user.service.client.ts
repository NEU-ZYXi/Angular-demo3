import {User} from '../models/user.model';

import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import 'rxjs-compat/add/operator/map';
import {environment} from '../../environments/environment';

// @Injectable() cannot be missed since here we have http in constructor
@Injectable()
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  // all functions return an observable, .subscribe whenever used

  createUser(user: User) {
    user._id = String(Math.floor(Math.random() * 1000) + 1);
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

  updateUser(userId: string, newUser: User) {
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
}
