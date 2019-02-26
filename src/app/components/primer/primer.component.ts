import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit {

  nombre: string;
  IsNegrita: boolean = false;
  numero: number = 3;
  exponente: number = 6;

  users: any[] = [
    {name: "carlos", age: 38},
    {name: "Oscar", age:42}
  ];


  constructor() {
    this.nombre = 'Oscar';

    let t = this;
    setTimeout( function() {t.nombre = "Oscar David"},5000);
    setTimeout( function() {t.nombre = "KILOPLOS"},10000);
  }

  ngOnInit() {
  }

  mimetodo(event) {
    this.nombre = "Pacote";
    this.IsNegrita = !this.IsNegrita;
  }

}
