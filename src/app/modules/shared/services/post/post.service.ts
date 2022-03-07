import { PostDTO } from './../../types/posts';
import { environment } from './../../../../../environments/environment';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../../types';
import { HttpClient } from '@angular/common/http';
import { mapPostDto } from '../../utils/map-post';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  postMap = new Map<number, Observable<Post>>();

  constructor(private http: HttpClient) {}

  getPost(id: number): Observable<Post> {
    if (!this.postMap.has(id)) {
      this.postMap.set(id, this.fetchPost(id));
    }
    return this.postMap.get(id) as Observable<Post>;
  }

  setPost(id: number, post: Post): void {
    this.postMap.set(id, of(post));
  }

  fetchPost(id: number): Observable<Post> {
    return this.http
      .get<PostDTO>(`${environment.API_URL}/posts/${id}?populate=*`)
      .pipe(mapPostDto);
  }
}
