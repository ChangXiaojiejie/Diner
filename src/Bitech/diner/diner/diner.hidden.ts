import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dinerHidden]'
})
export class DinerHiddenDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.display = "none";
  }
}
