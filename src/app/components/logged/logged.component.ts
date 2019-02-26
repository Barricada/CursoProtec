import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  isLogged: boolean = false;

  constructor(private authService: AuthService) {
    this.isLogged = authService.isLogged();
  }
  ngOnInit() {
  }

  logged() {
    this.authService.logOut();
  }

  getUserName(): string {
    return localStorage.getItem('username');
  }
}
