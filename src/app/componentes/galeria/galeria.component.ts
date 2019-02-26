import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

   title = 'Galeria';
  images: string[] = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg',
    'https://mmtstock.com/wp-content/uploads/2018/02/P7041396.jpg'
  ];

  imagenActual: string;
  indice = 0;

  ini:number = 0;
  fin:number = 3;
  size:number = 3;

  tamano = 500;
  interval_id: any;
  playing: boolean = false;

  constructor() {
    this.imagenActual = this.images[0];
  }

  ngOnInit() {
  }

  nextImage() {
    if ( this.indice < this.images.length-1 )
    {
      this.indice++;
      this.imagenActual = this.images[this.indice];
    }
  }
  prevImage() {
    if ( this.indice > 0)
    {
      this.indice--;
      this.imagenActual = this.images[this.indice];
    }
  }

  selectImage(index: number) {
    this.indice=index;
    this.imagenActual = this.images[this.indice];
  }

  aumentar(){
    this.tamano += 25;
  }

  disminuir(){
    this.tamano -= 25;
  }

  play(){
    this.interval_id = setInterval(()=> {
      if ( this.indice == this.images.length-1)
        this.indice=-1;
      this.nextImage();
    },1000);
    this.playing = true;
  }

  stop() {
    clearInterval(this.interval_id);
    this.playing = false;
  }

  nextPage() {
      this.ini += this.size;
      this.fin += this.size;
  }

  prevPage() {
    this.ini -= this.size;
    this.fin -= this.size;

  }
}
