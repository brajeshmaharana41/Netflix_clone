import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from '../constants/constant';
import { SharedService } from '../service/shared.service';
import { HttpResponse } from '../type/in-type';

@Component({
  selector: 'app-modal-details',
  templateUrl: './modal-details.component.html',
  styleUrls: ['./modal-details.component.scss'],
})
export class ModalDetailsComponent implements OnInit {
  similarVideoList = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _sharedService: SharedService
  ) {}
  userData: any;
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem(Constants.USER));
    console.log(String(this.userData._id));
    this.getSimilarVideos();
  }

  getSimilarVideos(
    viewer_id: string = '64007cf4ff785188e7333d1c',
    category_id: string = '63ee62cef1a56f26ded179ec'
  ) {
    this._sharedService.getSimilarVideo(viewer_id, category_id).subscribe({
      next: (res: HttpResponse) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          this.similarVideoList = res.body;
        }
        console.log(res);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error);
      },
    });
  }
}
