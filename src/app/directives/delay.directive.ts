import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit{

  @Input() set appDelay(duration : number){  }

  constructor(
    private templateRef : TemplateRef<any>,
    private vcref : ViewContainerRef) {
      // console.log(this.templateRef, this.vcref);
    }

    ngOnInit(){
      setTimeout(() => {
        this.vcref.createEmbeddedView(this.templateRef);
      }, this.appDelay)
    }

}
