import { Component, OnInit } from '@angular/core';
import { apiRouters } from '../../../../core/config/apiRouters';
import { ApiService } from '../../../../services/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PostsModule } from '../../posts.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from '../../../material/material.module';
import { HelperService } from '../../../../services/helper.service';


@Component({
  selector: 'app-list-posts',
  standalone: false,
  // imports: [ CommonModule, NgxSpinnerModule, PostsModule],
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  public post: Array<any>=[]

  constructor(public api: ApiService, public router: Router, public helperService: HelperService){}


  ngOnInit(): void {
    this.getpost();
  }



  getpost(): void{
    this.helperService.spinnerShow();
    this.api.getOb(apiRouters.POST_GET).subscribe({
      next: (resp) => {
        console.table(resp);
        this.post = resp
        this.helperService.spinnerHidder()
      }, error: (err) => {
        this.helperService.spinnerHidder()
        console.error(err);
        
      }
    })
  }

  detalles(id: number): void {
    this.router.navigateByUrl(`post/detail?id=${id}`);
  }
}