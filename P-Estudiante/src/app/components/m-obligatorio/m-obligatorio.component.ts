import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-m-obligatorio',
  templateUrl: './m-obligatorio.component.html',
  styleUrl: './m-obligatorio.component.scss'
})
export class MObligatorioComponent {
  @Input() control: any;
  @Input() errorMessages: {[key: string]: string} = {};

}
