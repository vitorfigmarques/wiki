import { HttpClient } from '@angular/common/http';
import { PostService } from './../shared/services/post/post.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { PostsDTO } from '../shared/types';
import { mapPostsDto } from '../shared/utils/map-post';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private postService: PostService,
    private httpClient: HttpClient
  ) {}

  fetchLatest() {
    return this.httpClient
      .get<PostsDTO>(
        'http://localhost:1337/api/posts?pagination[pageSize]=5&sort[0]=publishedAt:desc&populate=*'
      )
      .pipe(
        mapPostsDto,
        tap((posts) => {
          posts.forEach((post) => this.postService.setPost(post.id, post));
        })
      );
  }
}
