import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private _router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  openDialog(component: any, width = '250px', data = {}): MatDialogRef<any> {
    return this.dialog.open(component, {
      width: '250px',
      data: {},
    });
  }

  openSnackBar(message: string, action = 'OK', duration = 2000) {
    this.snackBar.open(message, action, { duration });
  }
}
