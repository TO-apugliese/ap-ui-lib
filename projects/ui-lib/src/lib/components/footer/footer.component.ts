import {Component, Input} from '@angular/core';
import {ApNavService}     from '../../services/ap-nav.service';

export interface FooterLink {
    text: string;
    url: string;
}

@Component({
    selector:    'ap-footer',
    templateUrl: './footer.component.html',
})
export class ApFooterComponent {
    private _links: FooterLink[];
    private dateNow = new Date();

    @Input()
    set links(links: FooterLink[]) {
        this._links = links;
    }

    get links(): FooterLink[] {
        return this._links || [];
    }

    constructor() {}

    get currentYear(): number {
        return this.dateNow.getFullYear();
    }
}
