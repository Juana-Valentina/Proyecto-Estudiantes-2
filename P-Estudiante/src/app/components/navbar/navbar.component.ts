import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  selectedLanguage: string = 'en'; // Valor predeterminado

  constructor(public translateService: TranslateService) { }

  changeLanguage(lang: string): void {
    this.selectedLanguage = lang;
    this.translateService.use(lang); // Cambiar el idioma usando TranslateService
    localStorage.setItem('lang', lang); // Opcional: guardar el idioma seleccionado en localStorage
  }
}