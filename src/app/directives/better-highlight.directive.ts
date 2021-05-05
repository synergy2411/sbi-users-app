import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  // <div appBetterHighlight></div>
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  // Binds the host element property
  @HostBinding("style.background-color") bgColor : any;
  @Input() favColor : string;
  // Listen to event triggered on host element
  // @HostListener("click") onmouseclieck(){
  //   console.log("Clicked");
  // }

  @HostListener("mouseenter") onmouseenter(){
    // this.bgColor = "yellow";
    this.bgColor = this.favColor;
  }

  @HostListener("mouseleave") onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor() { }

}
