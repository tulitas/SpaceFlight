import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = 'https://www.spaceflightnewsapi.net/api/v2/articles';
  constructor(private http: HttpClient) { }

  getBlogList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
