import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("appHighlight") highlightColor: string = "yellow";

  constructor(public el: ElementRef) {}

  ngOnInit() {
  //  this.highlightColor = "yellow";
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
