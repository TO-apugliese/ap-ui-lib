import {Directive, ElementRef, HostBinding, OnInit} from '@angular/core';

@Directive({
    selector: '[apButton]',
})
export class ButtonDirective {

    constructor(private el: ElementRef) {}

    @HostBinding('class')
    elementClass = 'waves-effect waves-light btn';
}
