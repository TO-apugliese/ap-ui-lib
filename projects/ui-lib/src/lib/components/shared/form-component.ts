import {Input}         from '@angular/core';
import {BaseComponent} from './base-component';

export abstract class FormComponent extends BaseComponent {

    @Input()
    model: any;

    @Input()
    field: string;

    constructor() {
        super();
    }

    get labelKey(): string {
        return `form.${this.field}`;
    }

    set value(value: any) {
        this.model[this.field] = value;
    }

    get value(): any {
        return this.model[this.field];
    }

    get id(): string {
        return `${this.field}-${this.identifier}`;
    }
}

