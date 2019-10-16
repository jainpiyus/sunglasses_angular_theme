import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobileNumber: new FormControl(''),
    password: new FormControl('')
  });
  constructor(public dialogRef: MatDialogRef<SignupComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }
  onLoginClick() {
    this.dialogRef.close();
    setTimeout(() => {
      const dialogRef = this.dialog.open(LoginComponent, {
        data: {}
      });
      dialogRef.afterClosed().subscribe(
        res => console.log(res)
      );
    }, 300);
  }

}
