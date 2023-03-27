import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeService } from 'src/app/home/home.service';
import { Constants } from '../constants/constant';
import { CommonService } from '../service/common.service';
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
    private _sharedService: SharedService,
    private _commonService: CommonService,
    private _homeService: HomeService
  ) {}
  userData: any;
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem(Constants.USER));
    console.log(this.data);
    this._commonService.playedVideo.next(this.data);
    this.getSimilarVideos(this.userData._id, this.data.category, this.data._id);
  }

  getSimilarVideos(viewer_id: string, category_id: string, video_id: string) {
    this._sharedService
      .getSimilarVideo(viewer_id, category_id, video_id)
      .subscribe({
        next: (res: HttpResponse) => {
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            this.similarVideoList = res.body;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        },
      });
  }

  addToMyList(video: any) {
    this._homeService.addToWishList(video.id, video.video[0].id).subscribe({
      next: (res) => {
        if (res.status === Constants.SUCCESSSTATUSCODE) {
          video.is_wishlist = true;
          video.wishlist_id = res.body._id;
        }
      },
    });
  }
}
