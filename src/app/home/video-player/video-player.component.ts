import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from 'src/app/shared/type/in-type';
import { Constants } from 'src/app/shared/constants/constant';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  video;
  constructor(
    private route: ActivatedRoute,
    public _homeService: HomeService,
  ) {}

  ngOnInit(): void {
    let video = this._homeService?.videoDetails || JSON.parse(sessionStorage.getItem('currentVideo'));
    console.log(video);
    let video_id = video?.id;
    let sub_video_id = video?.video[0]?.id;
    this.getVideoById(video_id, sub_video_id);
  }

  getVideoById(video_id: string, sub_video_id: string) {
    this._homeService
      .getVideoById(video_id, sub_video_id)
      .subscribe({
        next: (res: HttpResponse) => {
          if (res.status === Constants.SUCCESSSTATUSCODE) {
            this.video = res.body;
            console.log("seasons", this.video)
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error);
        },
      });
  }
}
