import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') signupForm: NgForm;
  regUsername: string;
  regPassword: string;
  regVerifiedPassword: string;
  user = { username: '', password: '', firstName: '', lastName: '', email: '', phone: ''};

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
  }

  onRegister() {
    this.user.username = this.regUsername;
    this.user.password = this.regPassword;
    // this.userService.createUser(this.user)
    //   .subscribe(
    //     (user: User) => {
    //       this.loginUser = user;
    //       this.router.navigate(['/user', this.loginUser._id]);
    //     }
    //   );

    this.userService.register(this.regUsername, this.regPassword)
      .subscribe((user) => {
        this.sharedService.user = user;
        this.router.navigate(['/user']);
      });
  }

  onCancel() {
    this.router.navigate(['login']);
  }
}
