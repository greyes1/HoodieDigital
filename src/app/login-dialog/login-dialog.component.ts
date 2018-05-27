import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material';
import {MyDialogComponent} from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '400px',
      height: '300px'
      });
  }
}
































































