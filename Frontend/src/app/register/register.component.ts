import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  user: UserModel = new UserModel("", "", "", "", "", "", "");
  confirmpass = "";

  submit() {
    if (this.user.password == this.confirmpass) {
      this.authService.registerUser(this.user).subscribe(status => {
        if (status.message == "success") {
          this.router.navigate(['/userlogin']);
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
