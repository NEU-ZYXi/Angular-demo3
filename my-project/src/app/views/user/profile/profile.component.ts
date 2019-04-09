import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  username: string;

  // object needs to be initialized to avoid undefined on ngOnInit()
  user = { username: '', password: '', firstName: '', lastName: '', email: '', phone: ''};

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router, private sharedService: SharedService) {

  }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    return this.userService.findUserById(this.userId)
      .subscribe(
        (user: User) => {
          this.user = user;
          this.username = this.user['username'];
        }
      );
  }

  onUpdateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe(
        (user: User) => {
          alert("Successfully update your profile");
          this.user = user;
        }
      );
  }

  logout() {
    this.userService.logout()
      .subscribe((user) => {
        this.router.navigate(['/login']);
      });
  }

}
