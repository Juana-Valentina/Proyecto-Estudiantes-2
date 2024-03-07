import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MaterialModule, TranslateModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public translateService: TranslateService, ){
    this.initApp()
  }

  initApp(): void{
    const lang: any = localStorage.getItem('lang') ? localStorage.getItem('lang'): 'en';
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
 
}