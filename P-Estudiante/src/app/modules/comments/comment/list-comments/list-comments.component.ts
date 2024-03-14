import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Router } from '@angular/router';
import { HelperService } from '../../../../services/helper.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss'
})
export class ListCommentsComponent implements OnInit {

  public comments: Array<any>=[]

  constructor(
    public api: ApiService, public router: Router, public helperService: HelperService    
  ){}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void{
    console.log(this.comments);
    
  }












}
