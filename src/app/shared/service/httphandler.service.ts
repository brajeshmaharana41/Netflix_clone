import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
export abstract class HttpError {
  constructor(public text: any) {}
}

@Injectable({ providedIn: 'root' })
export class HttpHandlerService {
  constructor(private http: HttpClient) {}

  get(url: string, headers = {}, params = {}): Observable<any> {
    return this.http.get(url, {
      headers: new HttpHeaders(headers),
      params: params,
    });
  }

  post(url: string, body: any, headers = {}, params = {}): Observable<any> {
    return this.http.post(url, body, {
      headers: new HttpHeaders(headers),
      params: params,
    });
  }

  put(url: string, body: any, headers = {}, params = {}): Observable<any> {
    return this.http.put(url, body, {
      headers: new HttpHeaders(headers),
      params: params,
    });
  }

  patch(url: string, body: any, headers = {}, params = {}): Observable<any> {
    return this.http.patch(url, body, {
      headers: new HttpHeaders(headers),
      params: params,
    });
  }

  delete(url: string, headers = {}, params = {}): Observable<any> {
    return this.http.delete(url, {
      headers: new HttpHeaders(headers),
      params: params,
    });
  }

  request(method: string, url: string, body: any, headers = {}, params = {}) {
    return this.http.request(method, url, {
      body,
      headers: new HttpHeaders(headers),
      params,
    });
  }
}
