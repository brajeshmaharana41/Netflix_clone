import { EventEmitter, Injectable } from '@angular/core';
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
  videoDetails;
  viewer_id: any;
  token;
  selectCategory = new EventEmitter<string>();

  constructor(private _http: HttpHandlerService) {
    this.viewer_id = JSON.parse(localStorage.getItem('viewer'));
    this.token = localStorage.getItem(Constants.SESSIONTOKENSTRING)
  }

  getAllHomeData(viewer_id: string, type: string): Observable<AllHomeDataResponse> {
    return this._http.post(
      API.User_Video.getAllHomeData,
      {
        viewer_id: this.viewer_id?.id,
        type
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1ODdlZmI3ZTBlMzIyYzliMWQ0NSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc2NDg0NTE4LCJleHAiOjE3MDgwNDIxMTh9.iNPGouOIsmJx-ZMdr1MVnvElwl7apCRZsMutXdW7k9I',
      }
    );
  }
  getMenus() {
    return this._http.get(
      API.User_Video.fetchVideoType + '?viewer_id=' + this.viewer_id?.id
    );
  }

  getAllBannerVideo(viewer_id: string,type:string): Observable<AllHomeDataResponse> {
    return this._http.post(
      API.User_Video.getAllBannerVideo,
      {
        viewer_id: this.viewer_id?.id,
        type
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1ODdlZmI3ZTBlMzIyYzliMWQ0NSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc2NDg0NTE4LCJleHAiOjE3MDgwNDIxMTh9.iNPGouOIsmJx-ZMdr1MVnvElwl7apCRZsMutXdW7k9I',
      }
    );
  }

  getVideoByCategoryId(viewer_id: string, category_id: string): Observable<AllHomeDataResponse> {
    return this._http.post(
      API.User_Video.getVideoByCategory,
      {
        viewer_id: this.viewer_id?.id,
        category_id: category_id
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1ODdlZmI3ZTBlMzIyYzliMWQ0NSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc2NDg0NTE4LCJleHAiOjE3MDgwNDIxMTh9.iNPGouOIsmJx-ZMdr1MVnvElwl7apCRZsMutXdW7k9I',
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

  getVideoById(video_id: string, sub_video_id: string) {
    return this._http.post(
      `${API.User_Video.getVideoById}`,
      {
        video_id: video_id,
        sub_video_id: sub_video_id,
        viewer_id: this.viewer_id?.id },
      {
        Authorization:
        `Bearer ${this.token}`,
      }
    );
  }

  likeUnlikeLove(
    video_id: string,
    sub_video_id: string,
    action_type: 'unlike' | 'like' | 'love'
  ) {
    return this._http.post(
      API.User_Video.likeUnlikeLove,
      {
        video_id,
        sub_video_id,
        action_type,
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
      }
    );
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

  addToWishList(video_id: string, sub_video_id: string) {
    return this._http.post(
      API.user_video_wishlist.addToWishlist,
      {
        video_id,
        sub_video_id,
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
      }
    );
  }

  fetchWishList() {
    return this._http.get(API.user_video_wishlist.fetchWishlist, {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
    });
  }

  deleteWishList(wishListId: string) {
    return this._http.delete(
      `${API.user_video_wishlist.removeFromWishlist}/${wishListId}`,
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
      }
    );
  }
}
