import { Injectable } from '@angular/core';
import { API } from '../constants/api';
import { HttpHandlerService } from './httphandler.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private _http: HttpHandlerService) {}

  getSimilarVideo(viewer_id: string, category_id: string) {
    return this._http.post(
      API.User_Video.getSimilarVideo,
      {
        viewer_id,
        category_id,
      },
      {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjUwODZhMjQwYTNmN2NiNzgwNWU3ZSIsInVzZXJfcm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc3NjU0MDMwLCJleHAiOjE2ODAyNDYwMzB9.4osGdM_BcWi8ZbN5ZBYqvtg8_V1nq7IY9J-1avRyMqw',
      }
    );
  }
}
