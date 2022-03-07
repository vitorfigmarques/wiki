import { PostDtoData } from './../types/posts';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, PostDTO, PostsDTO } from '../types';

export const mapPostsDto = (dto$: Observable<PostsDTO>): Observable<Post[]> =>
  dto$.pipe(
    map(({ data }) =>
      (data as PostDtoData[]).map((data) => ({
        title: data.attributes.title,
        content: data.attributes.content,
        description: data.attributes.description,
        id: data.id,
        imagesUrl: {
          thumbnail: `${environment.CMS_URL}${data.attributes.image?.data.attributes.formats.thumbnail.url}`,
          small: `${environment.CMS_URL}${data.attributes.image?.data.attributes.formats.small.url}`,
          medium: `${environment.CMS_URL}${data.attributes.image?.data.attributes.formats.medium.url}`,
          large: `${environment.CMS_URL}${data.attributes.image?.data.attributes.formats.large.url}`,
        },
      }))
    )
  );

export const mapPostDto = (dto$: Observable<PostDTO>): Observable<Post> =>
  dto$.pipe(
    map((response) => {
      console.log(response);
      return {
        title: response.data.attributes.title,
        content: response.data.attributes.content,
        id: response.data.id,
        description: response.data.attributes.description,
        imagesUrl: {
          thumbnail: `${environment.CMS_URL}${response.data.attributes.image?.data.attributes.formats.thumbnail.url}`,
          small: `${environment.CMS_URL}${response.data.attributes.image?.data.attributes.formats.small.url}`,
          medium: `${environment.CMS_URL}${response.data.attributes.image?.data.attributes.formats.medium.url}`,
          large: `${environment.CMS_URL}${response.data.attributes.image?.data.attributes.formats.large.url}`,
        },
      };
    })
  );
