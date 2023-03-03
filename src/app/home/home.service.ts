import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../shared/constants/api';
import { Constants } from '../shared/constants/constant';
import { HttpHandlerService } from '../shared/service/httphandler.service';
import { AllHomeDataResponse } from '../shared/type/home-type';
import { CustomerData } from '../shared/type/signup.type';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  userData: CustomerData = JSON.parse(localStorage.getItem(Constants.USER));
  constructor(private _http: HttpHandlerService) {}

  getAllHomeData(): Observable<AllHomeDataResponse> {
    return this._http.post(
      API.User_Video.getAllHomeData,
      {
        viewer_id: '63eb57279df62e0896cc8a99',
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3YTc0ZjI5MmE5OWNlMmE2MzZjMSIsIm5hbWUiOiJzb3VyYXYgcGFuamEiLCJ1c2VyX2lkIjoiNjIyNTQzIiwidXNlcm5hbWUiOiJzb3VyYXZwYW5qYSIsImVtYWlsIjoicGFuamFzb3VyYXYwM0BnbWFpbC5jb20iLCJtb2JpbGUiOiI3Mjc4MTU5ODg4IiwidXNlcl9yb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzYzMTE1MjYsImV4cCI6MTY3ODkwMzUyNn0.nsmNFtdxSl2qBoyTFARyuy-sVaQccybIOCNv63vXGcI',
      }
    );
  }

  getAllVideoByVideoType(type: string, genres: string = '') {
    return this._http.post(API.User_Video.getAllVideoByVideoType, {
      viewer_id: this.userData._id,
      type,
      genres,
    });
  }

  videoSearch(
    search: string,
    language: string,
    sort_by: string,
    preference: string,
    title: string
  ) {
    return this._http.post(API.User_Video.getAllVideoByVideoType, {
      viewer_id: this.userData._id,
      search,
      language,
      sort_by,
      preference,
      title,
    });
  }

  getVideoById(video_id: string) {
    return this._http.get(`${API.User_Video.getVideoById}/${video_id}`, {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWE3YTc0ZjI5MmE5OWNlMmE2MzZjMSIsIm5hbWUiOiJzb3VyYXYgcGFuamEiLCJ1c2VyX2lkIjoiNjIyNTQzIiwidXNlcm5hbWUiOiJzb3VyYXZwYW5qYSIsImVtYWlsIjoicGFuamFzb3VyYXYwM0BnbWFpbC5jb20iLCJtb2JpbGUiOiI3Mjc4MTU5ODg4IiwidXNlcl9yb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzYzMTE1MjYsImV4cCI6MTY3ODkwMzUyNn0.nsmNFtdxSl2qBoyTFARyuy-sVaQccybIOCNv63vXGcI',
    });
  }

  likeUnlikeLove(video_id: string, action_type: 'unlike' | 'like' | 'love') {
    return this._http.post(API.User_Video.likeUnlikeLove, {
      video_id,
      action_type,
    });
  }

  getAllVideoGenres() {
    return this._http.get(API.User_Video.getAllVideoGenres);
  }

  getSimilarVideo(viewer_id: string, category_id: string) {
    return this._http.post(API.User_Video.getSimilarVideo, {
      viewer_id,
      category_id,
    });
  }
}
