import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const routes: Routes = [
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom( HttpClientModule, TranslateModule.forRoot({
      defaultLanguage: 'es', loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, deps: [HttpClient] 
                }
            })
        )
    ]
};

