import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { delay } from 'q';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  isLogged: boolean = false;

  user: string;
  pwd: string;
  timeOut: number = 30;

  nMaxTries: number = 3;
  nTryActual: number = 0;

  constructor(private authService: AuthService) {
    this.isLogged = authService.isLogged();
  }

  login(): boolean {
    let bRet = this.authService.login(this.user,this.pwd);

    // si no hemos conectado correctamente, aumentamos el contador de intentos
    if ( !bRet )
    {
      this.user = "";
      this.pwd = "";
      this.nTryActual++;
    }
    else{
      this.nTryActual=0;
    }

    if ( this.nTryActual == this.nMaxTries )
    {
        this.esperar();
    }

    return bRet;
  }

  async esperar() {
    let timeOutAnt: number = this.timeOut;
    while ( this.timeOut > 0 )
    {
      this.timeOut--;
      await delay(1000);
    }
    this.timeOut = timeOutAnt * 2;
    this.nTryActual=0;
  }


  ngOnInit() {
  }

}
