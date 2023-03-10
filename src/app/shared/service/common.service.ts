import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../shared/constants/constant';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  translateLanguage = new BehaviorSubject<string>(
    localStorage.getItem(Constants.CURLANG)
      ? localStorage.getItem(Constants.CURLANG)
      : 'en'
  );
  constructor(
    private _router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    // this.translate.addLangs(['en', 'hi']);
    // this.translate.setDefaultLang(
    //   localStorage.getItem('curLang') ? localStorage.getItem('curLang') : 'en'
    // );
    // this.translate.use('en');
  }

  openDialog(component: any, width = '250px', data = {}): MatDialogRef<any> {
    return this.dialog.open(component, {
      width: '250px',
      data: {},
    });
  }

  openSnackBar(message: string, action = 'OK', duration = 2000) {
    this.snackBar.open(message, action, { duration });
  }
  switchLanguage(lang: string) {
    localStorage.setItem(Constants.CURLANG, lang);
    this.translateLanguage.next(lang);
  }
}
