import { MarkdownModule } from 'ngx-markdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [RouterModule, CommonModule, MarkdownModule.forChild()],
  exports: [MarkdownModule, RouterModule],
})
export class SharedModule {}
