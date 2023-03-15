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
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
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
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWI1NzI3OWRmNjJlMDg5NmNjOGE5OSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc4OTE0MjMzLCJleHAiOjE2ODE1MDYyMzN9.z3agBHowtdyWgp-nEkXLdMheJ80iqgNOEn-Dude48dc',
    });
  }

  likeUnlikeLove(video_id: string, action_type: 'unlike' | 'like' | 'love') {
    return this._http.post(
      API.User_Video.likeUnlikeLove,
      {
        video_id,
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

  addToWishList(video_id: string) {
    return this._http.post(
      API.user_video_wishlist.addToWishlist,
      {
        video_id,
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
