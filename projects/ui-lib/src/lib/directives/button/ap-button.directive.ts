import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
    selector: 'button[apButton]',
})
export class ApButtonDirective implements OnInit {
    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.classList.add('waves-effect');
        this.el.nativeElement.classList.add('waves-light');
        this.el.nativeElement.classList.add('btn');
    }
}
