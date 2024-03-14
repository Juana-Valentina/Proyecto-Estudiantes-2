import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommentModule } from '../comments/comment/comment.module';



@NgModule({
  declarations: [ ListPostsComponent ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxSpinnerModule,
    MaterialModule,
    TranslateModule,
  ],

  exports:[
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
  ]

})
export class PostsModule {  }
