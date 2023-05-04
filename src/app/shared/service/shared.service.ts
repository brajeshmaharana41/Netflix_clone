import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { HttpHandlerService } from './httphandler.service';
import { Constants } from '../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  token;
  constructor(private _http: HttpHandlerService) {
    this.token = localStorage.getItem(Constants.SESSIONTOKENSTRING)
  }

  getSimilarVideo(viewer_id: string, category_id: string, video_id: string) {
    return this._http.post(
      API.User_Video.getSimilarVideo,
      {
        viewer_id,
        category_id,
        video_id,
      },
      {
        Authorization:
        `Bearer ${this.token}`,
      }
    );
  }

  getSeasons(viewer_id: string, video_id: string, sub_video_id: string) {
    return this._http.post(
      API.User_Video.getVideoById,
      {
        viewer_id,
        video_id,
        sub_video_id
      },
      {
        Authorization:
        `Bearer ${this.token}`,
      }
    );
  }
}
