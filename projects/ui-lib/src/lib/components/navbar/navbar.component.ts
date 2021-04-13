import {Component, OnInit} from '@angular/core';
import {ApNavService}      from '../../services/ap-nav.service';
import {BaseComponent}     from '../shared/base-component';

declare var M: any;

@Component({
    selector:    'ap-navbar',
    templateUrl: './navbar.component.html',
})
export class ApNavbarComponent extends BaseComponent implements OnInit {
    constructor(public navSrv: ApNavService) {
        super();
    }

    ngOnInit(): void {
        document.addEventListener('DOMContentLoaded', () => {
            const elem   = document.querySelectorAll(`.${this.id}`);
            M.Sidenav.init(elem);
        });
    }

    get id(): string {
        return `mobile-menu-${this.identifier}`;
    }
}
