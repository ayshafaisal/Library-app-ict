import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private _router: Router, private fb: FormBuilder, private authService: AuthService) { }

  
  user = {
    email: "",
    password: ""
  }
  invalidcreds: Boolean = false;

  ngOnInit(): void {
  }

  submit() {
    this.authService.userLogin(this.user).subscribe(status => {
      if (status.message == "success") {
        this.invalidcreds = false;
        localStorage.setItem('user',"user")
        this._router.navigate(['/booklist'])
      }
      else {
        this.invalidcreds = true;
      }
    })
  }

}
