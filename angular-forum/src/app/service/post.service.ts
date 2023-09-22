import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/api/forum/post/${id}`);
  }
}
