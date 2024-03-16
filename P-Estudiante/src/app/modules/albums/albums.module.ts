import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ListAlbumsComponent
  ],
  
  imports: [
    CommonModule,
    NgxSpinnerModule,
    MaterialModule,
    TranslateModule,
    ComponentsModule,
    MatProgressSpinnerModule
  ],

  exports: [
    ListAlbumsComponent,
    MaterialModule,
    NgxSpinnerModule
  ],
})

export class AlbumsModule { }
