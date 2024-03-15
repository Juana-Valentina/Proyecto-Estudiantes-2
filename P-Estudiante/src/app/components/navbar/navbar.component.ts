import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  selectedLanguage: string; // Propiedad para almacenar el idioma seleccionado

  constructor(public translateService: TranslateService) {
    // Inicializar el idioma seleccionado con el idioma actual
    this.selectedLanguage = localStorage.getItem('lang') || 'en';
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  changeLanguage(lang: string): void {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }
}