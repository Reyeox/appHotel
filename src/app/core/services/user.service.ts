import { Injectable } from '@angular/core';
import { User } from '../../core/data/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  // create a new user and store it in localStorage
  createUser(newUser: any): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  // login a user by updating their "isLogged" property to true
  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        let userIndex = users.findIndex(user => user.username === username && user.password === password);
        if (userIndex >= 0) {
          users[userIndex].isLogged = true;
          localStorage.setItem('users', JSON.stringify(users));
          resolve(true);
        } else {
          resolve(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  // logout a user by updating their "isLogged" property to false
  logout(username: string): void {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    let userIndex = users.findIndex(user => user.username === username);
    if (userIndex >= 0) {
      users[userIndex].isLogged = false;
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  // get the currently logged in user (if any)
  getCurrentUser(): User | null {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(user => user.isLogged) || null;
  }


}
