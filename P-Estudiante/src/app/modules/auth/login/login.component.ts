import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  name = new FormControl('');
  hide = true;

  constructor( 
    public helperService: HelperService,
    public router: Router
  ){}

  form = new FormGroup({
    email: new FormControl('', Validators["required"]),
    password: new FormControl('', Validators["required"]),
  })

  save(): void{

    if (this.form.value.email === 'juanasena-2005@outlook.com' && (this.form.value.password === '3996')){

      const data ={
        email: 'juanasena-2005@outlook.com',
        password: '3996'
      }
      this.helperService.setLocalSorage('user', JSON.stringify(data));
      this.helperService.setLocalSorage('session', 'true');
      this.router.navigateByUrl('home-page');

    }else{
      this.helperService.alert('error', 'datos invalidos', 'error')
    }
    
    this.helperService.spinnerHidder()
  }




}
