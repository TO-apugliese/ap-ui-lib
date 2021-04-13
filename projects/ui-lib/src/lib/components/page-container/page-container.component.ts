import {Component, Input} from '@angular/core';

@Component({
    selector:    'ap-page-container',
    templateUrl: './page-container.component.html',
    styleUrls:   ['page-container.component.scss'],
})
export class ApPageContainerComponent {
    @Input() name: string;

    get containerClass(): string {
        if (!this.name) throw Error('you need to pass a name');

        return `${this.name}-page`;
    }
}
