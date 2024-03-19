import { Component, Input, OnInit, input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HelperService } from '../../../services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  @Input() icon1 = 'email';


  name = new FormControl('');
  hide: boolean = true ;
  show: string = 'r';
  
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
      this.helperService.setLocalStorage('user', JSON.stringify(data));
      this.helperService.setLocalStorage('session', 'true');
      this.router.navigateByUrl('home-page');

    }else{
      this.helperService.alert('error', 'datos invalidos', 'error')
    }
    
    this.helperService.spinnerHidder()
  }

  visibilidad(): void {
    this.hide = !this.hide; 
}
 
}

//  probando(): void{
//   if (this.age < 3 ){
//   console.log(this.message = "hola");

// }else if(this.age < 18){
//   console.log(this.message = 'holi');
  
// }else if(this.age < 100){
//   console.log(this.message = 'felicidad');

// }else {
//   console.log(this.message = 'bye');

// }


// this.age < 3 ? console.log(this.message = 'hola') : this.age < 18 ? console.log(this.message = 'holi') :
// this.age < 100 ? console.log(this.message = 'felicidad') : console.log(this.message= 'bye');



//  condición ? expresión_si_verdadero : expresión_si_falso

//condición1 ? expresión_si_condición1_verdadero : condición2 ? expresión_si_condición2_verdadero : expresión_si_condición2_falso

