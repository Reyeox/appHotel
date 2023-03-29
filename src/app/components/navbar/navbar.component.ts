import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {


  constructor(private router: Router, private userService: UserService) {
  }


  
  hideMenu(){
    let isLogged = this.userService.getCurrentUser()?.isLogged;
    if(isLogged){
      return true;
    }else{
      return false;
    }
    
  };


  register(): Promise<boolean>{
    return this.router.navigateByUrl('register');
  }
  login(): Promise<boolean>{
    return this.router.navigateByUrl('login');
  };

}
