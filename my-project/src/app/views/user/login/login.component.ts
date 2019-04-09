import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model';
import {SharedService} from '../../../services/shared.service.client';

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
  loginUser: User;

  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
  }


  onLogin() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    // can also use findUserByUsername and check if password matches
    // this.userService.findUserByCredentials(this.username, this.password)
    //   .subscribe(
    //     (user: User) => {
    //       this.loginUser = user;
    //       // in user.service, if response is empty, return undefined
    //       if (this.loginUser === undefined || this.loginUser === null) {
    //         this.errorFlag = true;
    //       } else {
    //         this.router.navigate(['/user', this.loginUser._id]);
    //       }
    //     }
    //   );

    this.userService.login(this.username, this.password)
      .subscribe((user) => {
        this.loginUser = user;
        if (this.loginUser === undefined || this.loginUser === null) {
          this.errorFlag = true;
        } else {
          this.router.navigate(['/user']);
        }
      });
  }

  reload() {
    this.errorFlag = false;
    this.router.navigate(['./'], {relativeTo: this.route});
  }

}
