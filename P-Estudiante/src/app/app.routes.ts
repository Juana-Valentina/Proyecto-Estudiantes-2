import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { guardsGuard } from './shared/auth-guard/guards.guard';

export const routes: Routes = [
    {path: '**' , component: LoginComponent, canActivate: [guardsGuard]},
    {path: 'home-page' , component: HomePageComponent, canActivate: [guardsGuard]},
    {path: 'post', loadChildren: () => import('./modules/posts/posts.module').then((module) => module.PostsModule), canActivate: [guardsGuard] },
    {path: 'auth', loadChildren:() => import('./modules/auth/auth.module').then((module) => module.AuthModule), canActivate: [guardsGuard] },
    
];
