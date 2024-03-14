import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { ListCommentsComponent } from './list-comments/list-comments.component';


@NgModule({
  declarations: [
    ListCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    ListCommentsComponent,
  ],

  exports:[
    ListCommentsComponent,
  ]

})
export class CommentModule { }
