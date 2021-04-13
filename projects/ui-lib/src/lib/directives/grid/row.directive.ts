import {Directive, ElementRef, HostBinding} from '@angular/core';

@Directive({
    selector: '[apRow]',
})
export class RowDirective {
    constructor(private el: ElementRef) {}

    @HostBinding('class')
    elementClass = 'row';
}
