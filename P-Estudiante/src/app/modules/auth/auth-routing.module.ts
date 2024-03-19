import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { guardsGuard } from '../../shared/auth-guard/guards.guard';

const routes: Routes = [
  {path: '' , children: [
    {path: '**' , component: LoginComponent, canActivate: [guardsGuard]},
    {path: 'log-in' , component: LoginComponent, canActivate: [guardsGuard]},  
    
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
