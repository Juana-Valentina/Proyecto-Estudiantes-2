import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ListCommentsComponent } from '../comments/comment/list-comments/list-comments.component';

const routes: Routes = [
  {path: '' , children: [
    {path: 'list' , component: ListPostsComponent},
    {path: 'detail' , component: DetailPostComponent},
    {path: 'detail' , component: ListCommentsComponent},
    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { 
  
}