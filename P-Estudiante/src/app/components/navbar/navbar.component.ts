import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  selectedLanguage: string = 'en'; // Valor predeterminado (como prueba)

  constructor(public translateService: TranslateService) { }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}