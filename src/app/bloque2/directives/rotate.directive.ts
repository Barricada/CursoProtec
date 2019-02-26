import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]'
})
export class RotateDirective {

  @Input('appRotate') angle: number = 0.0;
  @Input() step: number = 10.0;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.transform = `rotate(${this.angle}deg)`;
  }

  @HostListener("click", ['$event']) girar(event: MouseEvent) {
    if(event.shiftKey) {
      this.angle = this.angle - this.step;
    } else {
      this.angle = +(this.angle) + +(this.step);
    }

    this.el.nativeElement.style.transform = `rotate(${this.angle}deg)`;
  }
}
