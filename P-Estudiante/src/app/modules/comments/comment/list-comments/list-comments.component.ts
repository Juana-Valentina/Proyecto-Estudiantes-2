import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../../../services/helper.service';
import { ApiService } from '../../../../services/api.service';
import { apiRouters } from '../../../../core/config/apiRouters';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss'
})
export class ListCommentsComponent implements OnInit {

  @Input()
  postId: any;
  comments: any[] = [];
  
  constructor(public api: ApiService, public helperService: HelperService) { }

 
  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.helperService.spinnerShow();
    //llama HTTP GET usando el servicio ApiService para obtener los comentarios del post específico.
    this.api.getOb(`${apiRouters.POST_GET}/${this.postId}/comments`).subscribe({
      next: (resp: any) => {
        if (this.postId) {
          this.comments = resp;
        }
      },
      error: (err) => {
        this.helperService.spinnerHidder();
        console.error(err);
      },
        
      
    });
  }

}











