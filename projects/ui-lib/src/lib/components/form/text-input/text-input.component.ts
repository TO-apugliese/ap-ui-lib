import {Component, Input, OnInit} from '@angular/core';
import {FormComponent}            from '../../shared/form-component';

declare var M: any;

@Component({
    selector:    'ap-text-input',
    templateUrl: './text-input.component.html',
})
export class TextInputComponent extends FormComponent implements OnInit {
    @Input()
    icon: string;

    @Input()
    maxCharacter;

    constructor() {
        super();
    }

    ngOnInit(): void {
        console.log({maxCharacter: this.maxCharacter});
        if (!!this.maxCharacter) {
            const inter = setInterval(() => {
                if (!!M && !!M.characterCounter) {
                    clearInterval(inter);

                    const elems = document.querySelectorAll(`#${this.id}`);
                    console.log({elems});
                    if (elems.length > 0) {
                        elems[0].setAttribute('data-length', this.maxCharacter);
                        M.characterCounter.init(elems);
                    }
                }
            }, 50);
        }
    }
}
