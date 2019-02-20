import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  username: string;
  user: User;
  newUsername: string = '';
  newEmail: string = '';
  newFirstName: string = '';
  newLastName: string = '';
  newUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userId = params['uid'];
        }
      );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }

  onUpdateUser() {
    if (this.newUsername === '') {
      this.newUsername = this.username;
    }
    if (this.newEmail === '') {
      // @ts-ignore
      this.newEmail = this.user.email;
    }
    if (this.newFirstName === '') {
      this.newFirstName = this.user.firstName;
    }
    if (this.newLastName === '') {
      this.newLastName = this.user.lastName;
    }
    this.newUser = new User(this.userId, this.newUsername, this.user.password, this.newFirstName, this.newLastName);
    this.userService.updateUser(this.userId, this.newUser);
    alert("successfully update your profile");
  }

}
