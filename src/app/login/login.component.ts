import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/Ilogin';
import { SignupComponent } from '../common/signup/signup.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {} as User;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<LoginComponent>, private router: Router, public dialog: MatDialog,
    private loginService: LoginService) { }

  ngOnInit() {
   
  }
  login(){
    this.user.mobileNumber = "9039907701";
    this.loginService.loggedIn.next(this.user);
    this.onNoClick();
  }
  onSignUpClick(){
    this.dialogRef.close();
    setTimeout(() => {
      const dialogRef = this.dialog.open(SignupComponent, {
        data: {}
      });
      dialogRef.afterClosed().subscribe(
        res => console.log(res)
      );
    }, 300);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
