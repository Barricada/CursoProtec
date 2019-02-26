import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: string, pwd: string) : boolean {
    if ( user != 'test' || pwd != 'test')
      return false;

    localStorage.setItem('username',user);
    return true;
  }

  logOut(): boolean {
    localStorage.removeItem('username');
    return true;
  }
  isLogged(): boolean {
    let user: string = localStorage.getItem('username');
    return user != null;
  }
}
