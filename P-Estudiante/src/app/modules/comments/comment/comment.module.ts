import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { MaterialModule } from '../../material/material.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    ListCommentsComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    MaterialModule,
    TranslateModule,
    NgxSpinnerModule
  ],

  exports:[
    ListCommentsComponent,
    
  ]

})
export class CommentModule { }
