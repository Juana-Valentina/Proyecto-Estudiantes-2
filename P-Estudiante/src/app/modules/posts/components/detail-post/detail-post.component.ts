import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { apiRouters } from '../../../../core/config/apiRouters';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../../../services/helper.service';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-detail-post',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './detail-post.component.html',
  styleUrl: './detail-post.component.scss'
})
export class DetailPostComponent {

  // comments : Array<any> = []
  public comments: Array<any>=[]
  post = {} as any;

  constructor(public activatedRoute: ActivatedRoute,
    public api: ApiService,
    public helperService: HelperService,
    public router: Router) { 
    activatedRoute.queryParams.subscribe({
      next:(resp)=> {
        console.log(resp);
        this.getDetail(resp['id'])
      },
      error:(err)=>{
//TODO devolver list-post 
      }
    })

  }

  getDetail(id: number): void{
    this.helperService.spinnerShow();
    this.api.getPr(apiRouters.POST_GET + `/${id}`).then((resp: any) =>{
      console.log(resp)
      this.post = resp;
      this.helperService.spinnerHidder();
    }).catch(err=>{
      this.helperService.spinnerHidder();
      console.error(err);
      
    })
  }

  goBack(): void {
    this.router.navigateByUrl('post/list');
  }

}