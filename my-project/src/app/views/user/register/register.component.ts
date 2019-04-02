import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {Router} from '@angular/router';

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
  loginUser = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '', phone: ''};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onRegister() {
    this.user.username = this.regUsername;
    this.user.password = this.regPassword;
    this.userService.createUser(this.user)
      .subscribe(
        (user: User) => {
          this.loginUser = user;
          this.router.navigate(['/user', this.loginUser._id]);
        }
      );
  }

  onCancel() {
    this.router.navigate(['login']);
  }
}
