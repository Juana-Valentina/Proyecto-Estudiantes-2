import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { apiRouters } from '../../../../core/config/apiRouters';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../../../services/helper.service';
import { MaterialModule } from '../../../material/material.module';
import { CommentModule } from '../../../comments/comment/comment.module';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [CommonModule, MaterialModule, CommentModule],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent {

  // comments : Array<any> = []
    idPost: any;
  post = {} as any;

  constructor(public activatedRoute: ActivatedRoute,
    public api: ApiService,
    public helperService: HelperService,
    public router: Router,
    public location: Location,
    ) 
    
    { 
    activatedRoute.queryParams.subscribe({
      next:(resp)=> {
        this.getDetail(resp['id']);
        this.idPost = resp['id']
        
      },
      error:(err)=>{
        this.router.navigateByUrl('post/list');
      }
    })

  }

  getDetail(id: number): void{
    this.helperService.spinnerShow();
    this.api.getPr(apiRouters.POST_GET + `/${id}`).then((resp: any) =>{
      this.post = resp;
      this.helperService.spinnerHidder();
    }).catch(err=>{
      this.helperService.spinnerHidder();
      this.helperService.alert('error', 'error', 'error')
    })
  }

  goBack(): void {
    this.router.navigateByUrl('post/list');
    // this.location.back();
    
  }

  
    

  
}