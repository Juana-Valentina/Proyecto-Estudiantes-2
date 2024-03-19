import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { guardsGuard } from './shared/auth-guard/guards.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, //aqui no se protege
    { path: 'home-page', component: HomePageComponent, canActivate: [guardsGuard] },
    { path: 'post', loadChildren: () => import('./modules/posts/posts.module').then((m) => m.PostsModule), canActivate: [guardsGuard]},
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule), canActivate: [guardsGuard]},
    // Redirigir a login si no está autenticado, o a home si ya está autenticado
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // // Ruta para manejar rutas no definidas, redirige al login
    { path: '**', redirectTo: 'login' },
];
    
