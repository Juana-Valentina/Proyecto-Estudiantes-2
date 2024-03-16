import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../../shared/interfaces/album';
import { ApiService } from '../../../services/api.service';
import { HelperService } from '../../../services/helper.service';
import { apiRouters } from '../../../core/config/apiRouters';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.scss'
})

export class ListAlbumsComponent implements OnInit {
  @Input() userId: any;
  public albums: Album[] = [];

  constructor(public activatedRoute: ActivatedRoute
    ,public api: ApiService, public helperService: HelperService){}

  ngOnInit(): void {
      console.log(this.getalbums);
      
  }

  getalbums(): void{
    this.helperService.spinnerShow();
    this.api.getOb(apiRouters.POST_GET).subscribe({
      next: (resp) => {
        console.table(resp);
        this.albums = resp
        this.helperService.spinnerHidder()
      }, error: (err) => {
        this.helperService.spinnerHidder()
        this.helperService.alert('error', 'error', 'error')
        console.error(err);
        
      }
    })
  }

}
