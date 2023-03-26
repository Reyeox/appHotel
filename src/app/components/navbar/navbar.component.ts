import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {


  constructor(private router: Router) {
  }



  register(): Promise<boolean>{
    return this.router.navigateByUrl('register');
  }
  login(): Promise<boolean>{
    return this.router.navigateByUrl('/login');
  };

}
