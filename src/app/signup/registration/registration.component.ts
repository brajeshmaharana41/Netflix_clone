import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(
    private _router: Router,
    private translate: TranslateService,
    private _commonService: CommonService
  ) {
    this._commonService.translateLanguage.subscribe((res: string) => {
      this.translate.use(res);
    });
  }

  ngOnInit(): void {}

  goToRegFormPage() {
    this._router.navigate(['signup/regform']);
  }
}
