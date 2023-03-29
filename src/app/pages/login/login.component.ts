import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  registrationForm: FormGroup;
  errorMessage: string | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  
  //Methods to login
  login(): void{
    console.log(this.registrationForm.get('email')?.value);
    this.userService.login(this.registrationForm.get('email')?.value, this.registrationForm.get('password')?.value).then(el=>{
      if(el){
        console.log("User logged successfully.");
        this.toastr.success('Inicio de sesión correcto.','Inicio de sesión');
        setTimeout(() => {
          this.router.navigateByUrl('/')
        }, 1000);
      }else{
        console.log("User no registered.");
        this.toastr.error('No se encuentra registrado un usuario con el email: ' + this.registrationForm.get('email')?.value);
      }
    }).catch(error=>{
      console.log(error);
    })
  }





}
