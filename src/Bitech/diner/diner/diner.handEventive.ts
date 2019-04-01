import { Directive, ElementRef, EventEmitter, Input, Output, HostListener} from '@angular/core';

@Directive({
  selector: '[dinerHandEvent]'
})
export class DinerHandDirective  {
  constructor(el: ElementRef) {}
  @Input() dinerEl: any ;
  @Output() handDisabled = new EventEmitter();
  @HostListener( 'click' )
  onclick() {
    this.handDisabled.emit(this.dinerEl);
  }
}
