import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {path: 'post', loadChildren: () => import('./modules/posts/posts.module').then((module) => module.PostsModule)},
    // {path: 'home' , loadChildren: () => import('./components/components.module').then((module) => module.ComponentsModule )},
    {path: '**' , component: HomePageComponent},
    {path: 'Home-Page' , component: HomePageComponent},
];
