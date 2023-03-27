import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';


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
    private router: Router
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
    this.userService.login(this.registrationForm.value.email, this.registrationForm.value.password).then(el=>{
      if(el){
        console.log("User logged successfully.");
        this.router.navigateByUrl('/');
      }else{
        console.log("User no logged.");
        
      }
    }).catch(error=>{
      console.log(error);
    })
  }





}
