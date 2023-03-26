import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/data/models/User';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {


  registrationForm: FormGroup;
  errorMessage: string | undefined;


  roleList: any[] = [
    {
      "id": 1,
      "name": "Agente"
    },
    {
      "id": 2,
      "name": "Cliente"
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  register(): void {
    if (this.registrationForm.valid) {
      const newUser: User = {
        username: this.registrationForm.value.username,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        isLogged: false,
        role: 'user'
      };
      this.userService.createUser(newUser)
        .then(() => {
          console.log('User created successfully!');
          // optionally redirect to login page or display success message
        })
        .catch(error => {
          console.error('An error occurred:', error);
          this.errorMessage = 'Failed to create user. Please try again.';
        });
    }
  }
  


  // register(): void{
  //   if(!this.User.get('email')?.value || !this.User.get('password')?.value || !this.User.get('role')?.value){
  //     console.log("Debes diligenciar todos los datos.");
  //   }else{
  //     let objectJson = {
  //       "username": this.User.get('username')?.value,
  //       "password": this.User.get('password')?.value,
  //       "isLogged": false,
  //       "email": this.User.get('email')?.value,
  //       "role": this.User.get('role')?.value
  //     };
  //     this.userService.createUser(objectJson).then(res=>{
  //       console.log(res);
  //     });
  //     }
  // }


}
