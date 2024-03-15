import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackComponent } from './back/back.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterLink } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    BackComponent,
    HomePageComponent,
  ],

  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    TranslateModule,
    MatProgressSpinnerModule,
    TranslateModule,
    RouterLink,
    FormsModule
    
  ],

  exports: [
    SpinnerComponent, NavbarComponent, BackComponent, HomePageComponent
    
  ]

})
export class ComponentsModule { }
