import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ejemplo-evento',
  templateUrl: './ejemplo-evento.component.html',
  styleUrls: ['./ejemplo-evento.component.css']
})
export class EjemploEventoComponent implements OnInit {

  @ViewChild('box') box: ElementRef;

  values = '';

  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  constructor() { }

  ngOnInit() {
  }

  add(heroe: string) {
    if (heroe) {
      this.heroes.push(heroe);

      this.box.nativeElement.value = "lulo";
    }
  }

  add2() {
    if (this.box.nativeElement.value) {
      this.heroes.push(this.box.nativeElement.value);

      this.box.nativeElement.value = "lulo";
    }
  }
}
