import { SharedModule } from './../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostComponent,
      },
    ]),
  ],
})
export class PostModule {}
