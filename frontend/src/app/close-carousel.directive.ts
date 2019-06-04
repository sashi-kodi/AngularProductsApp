import { Directive, Output, ElementRef, HostListener,EventEmitter } from '@angular/core';
//This directive would close the carousel and the overlay when clicked outside
@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {
constructor(private _elementRef: ElementRef){
}

    @Output()
    public clickOutside = new EventEmitter();
 
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside && !targetElement.className.includes('open-carousel')) {
            this.clickOutside.emit(null);
        }
    }
  
}
