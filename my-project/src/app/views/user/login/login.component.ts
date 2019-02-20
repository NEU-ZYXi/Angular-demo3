import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  @ViewChild('form') loginForm: NgForm;
  errorFlag: boolean = false;
  errorMessage: string = "Invalid username or password";

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onLogin() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    const submittedUser = this.userService.findUserByUsername(this.username);

    if (submittedUser === undefined || this.password != submittedUser.password) {
      this.errorFlag = true;
    } else {
      const loginUser = this.userService.findUserByCredentials(this.username, this.password);
      this.router.navigate(['/user', loginUser._id]);
    }
  }

  reload() {
    this.errorFlag = false;
    this.router.navigate(['./'], {relativeTo: this.route});
  }

}
