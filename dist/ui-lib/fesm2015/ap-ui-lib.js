import { InjectionToken, Injectable, Inject, Input, Component, NgModule, Directive, ElementRef, HostBinding } from '@angular/core';
import { v4 } from 'uuid';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const AP_NAV_ITEMS = new InjectionToken('AP_NAV_ITEMS');

class ApNavService {
    constructor(items) {
        this.items = items;
    }
    get currentPage() {
        const path = window.location.pathname;
        return !!path
            ? path.replace('/', '').toLowerCase()
            : null;
    }
    get subItems() {
        if (!!this.items && !!this.currentPage) {
            const page = this.items.find(x => x.name === this.currentPage);
            if (!page || !page.subItems)
                return [];
            return page.subItems;
        }
        return [];
    }
}
ApNavService.decorators = [
    { type: Injectable }
];
ApNavService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [AP_NAV_ITEMS,] }] }
];

class BaseComponent {
    constructor() {
        this.identifier = v4();
    }
}

class FormComponent extends BaseComponent {
    constructor() {
        super();
    }
    get labelKey() {
        return `form.${this.field}`;
    }
    set value(value) {
        this.model[this.field] = value;
    }
    get value() {
        return this.model[this.field];
    }
    get id() {
        return `${this.field}-${this.identifier}`;
    }
}
FormComponent.propDecorators = {
    model: [{ type: Input }],
    field: [{ type: Input }]
};

class TextInputComponent extends FormComponent {
    constructor() {
        super();
    }
    ngOnInit() {
        console.log({ maxCharacter: this.maxCharacter });
        if (!!this.maxCharacter) {
            const inter = setInterval(() => {
                if (!!M && !!M.characterCounter) {
                    clearInterval(inter);
                    const elems = document.querySelectorAll(`#${this.id}`);
                    console.log({ elems });
                    if (elems.length > 0) {
                        elems[0].setAttribute('data-length', this.maxCharacter);
                        M.characterCounter.init(elems);
                    }
                }
            }, 50);
        }
    }
}
TextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-text-input',
                template: "<div class=\"input-field\">\n    <i *ngIf=\"icon\" class=\"material-icons prefix\">{{icon}}</i>\n    <input [id]=\"id\" [(ngModel)]=\"value\" type=\"text\" class=\"validate\">\n    <label [for]=\"id\" [class.active]=\"!!value\">{{ labelKey }}</label>\n</div>\n"
            },] }
];
TextInputComponent.ctorParameters = () => [];
TextInputComponent.propDecorators = {
    icon: [{ type: Input }],
    maxCharacter: [{ type: Input }]
};

class TextInputModule {
}
TextInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TextInputComponent],
                imports: [
                    FormsModule,
                    CommonModule,
                ],
                exports: [TextInputComponent],
            },] }
];

class ApNavbarComponent extends BaseComponent {
    constructor(navSrv) {
        super();
        this.navSrv = navSrv;
    }
    ngOnInit() {
        document.addEventListener('DOMContentLoaded', () => {
            const elem = document.querySelectorAll(`.${this.id}`);
            M.Sidenav.init(elem);
        });
    }
    get id() {
        return `mobile-menu-${this.identifier}`;
    }
}
ApNavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-navbar',
                template: "<nav class=\"nav-extended\">\n    <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo\">Logo</a>\n        <a href=\"#\" data-target=\"mobile-menu\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li *ngFor=\"let item of navSrv.items\">\n                <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"navSrv.subItems.length > 0\" class=\"nav-content\">\n        <ul class=\"tabs tabs-transparent\">\n            <li *ngFor=\"let item of navSrv.subItems\" class=\"tab\">\n                <a [routerLink]=\"navSrv.currentPage\" [fragment]=\"item.path\">{{item.name}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<ul [class]=\"'sidenav ' + id\" id=\"mobile-menu\">\n    <li *ngFor=\"let item of navSrv.items\">\n        <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n    </li>\n</ul>\n"
            },] }
];
ApNavbarComponent.ctorParameters = () => [
    { type: ApNavService }
];

function navServiceFactory(items) {
    return new ApNavService(items);
}
class ApNavbarModule {
    static forRoot(items) {
        return {
            ngModule: ApNavbarModule,
            providers: [
                {
                    provide: AP_NAV_ITEMS,
                    useValue: items,
                },
                {
                    provide: ApNavService,
                    useFactory: navServiceFactory,
                    deps: [AP_NAV_ITEMS],
                },
            ]
        };
    }
}
ApNavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ApNavbarComponent],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [ApNavbarComponent],
            },] }
];

class ApFooterComponent {
    constructor() {
        this.dateNow = new Date();
    }
    set links(links) {
        this._links = links;
    }
    get links() {
        return this._links || [];
    }
    get currentYear() {
        return this.dateNow.getFullYear();
    }
}
ApFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-footer',
                template: "<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">\n          <ng-content select=\"[content-title]\"></ng-content>\n        </h5>\n        <p class=\"grey-text text-lighten-4\">\n          <ng-content select=\"[content-description]\"></ng-content>\n        </p>\n      </div>\n      <div *ngIf=\"links.length > 0\" class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li *ngFor=\"let link of links\">\n            <a class=\"grey-text text-lighten-3\" [href]=\"link.url\">{{link.text}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      \u00A9 {{currentYear}} <ng-content select=\"[copyright-text]\"></ng-content>\n    </div>\n  </div>\n</footer>\n"
            },] }
];
ApFooterComponent.ctorParameters = () => [];
ApFooterComponent.propDecorators = {
    links: [{ type: Input }]
};

class ApFooterModule {
}
ApFooterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ApFooterComponent],
                imports: [
                    CommonModule,
                ],
                exports: [ApFooterComponent],
            },] }
];

class ApPageContainerComponent {
    get containerClass() {
        if (!this.name)
            throw Error('you need to pass a name');
        return `${this.name}-page`;
    }
}
ApPageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-page-container',
                template: "<div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n</div>\n",
                styles: ["[class*=-page]{min-height:550px;padding:40px}"]
            },] }
];
ApPageContainerComponent.propDecorators = {
    name: [{ type: Input }]
};

class ApPageContainerModule {
}
ApPageContainerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ApPageContainerComponent],
                imports: [
                    CommonModule,
                ],
                exports: [ApPageContainerComponent],
            },] }
];

class ButtonDirective {
    constructor(el) {
        this.el = el;
        this.elementClass = 'waves-effect waves-light btn';
    }
}
ButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[apButton]',
            },] }
];
ButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
ButtonDirective.propDecorators = {
    elementClass: [{ type: HostBinding, args: ['class',] }]
};

class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonDirective],
                exports: [ButtonDirective],
            },] }
];

class RowDirective {
    constructor(el) {
        this.el = el;
        this.elementClass = 'row';
    }
}
RowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[apRow]',
            },] }
];
RowDirective.ctorParameters = () => [
    { type: ElementRef }
];
RowDirective.propDecorators = {
    elementClass: [{ type: HostBinding, args: ['class',] }]
};

class ColDirective {
    set apCol(value) {
        this._apCol = value;
        this.setClasses();
    }
    set apPush(value) {
        this._push = value;
        this.setClasses();
    }
    set apPull(value) {
        this._pull = value;
        this.setClasses();
    }
    setClasses() {
        const colClasses = this.getDevicesClasses(this._apCol).join(' ');
        const pushClasses = this.getDevicesClasses(this._push).map(x => `push-${x}`).join(' ');
        const pullClasses = this.getDevicesClasses(this._pull).map(x => `pull-${x}`).join(' ');
        this.elementClass = `col ${colClasses} ${pushClasses} ${pullClasses}`;
    }
    getDevicesClasses(value) {
        if (!value)
            return [];
        const deviceSizes = ['s', 'm', 'l', 'xl'];
        const sizes = value.split(',');
        if (sizes.length > 4)
            throw Error('to much sizes passed');
        return sizes
            .map((col, i) => `${deviceSizes[i]}${col}`);
    }
}
ColDirective.decorators = [
    { type: Directive, args: [{
                selector: '[apCol]',
            },] }
];
ColDirective.propDecorators = {
    apCol: [{ type: Input }],
    apPush: [{ type: Input }],
    apPull: [{ type: Input }],
    elementClass: [{ type: HostBinding, args: ['class',] }]
};

class GridModule {
}
GridModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RowDirective, ColDirective],
                exports: [RowDirective, ColDirective],
            },] }
];

/*
 * Public API Surface of ui-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AP_NAV_ITEMS, ApFooterComponent, ApFooterModule, ApNavService, ApNavbarComponent, ApNavbarModule, ApPageContainerComponent, ApPageContainerModule, ButtonModule, GridModule, TextInputComponent, TextInputModule, navServiceFactory, FormComponent as ɵa, BaseComponent as ɵb, ButtonDirective as ɵc, RowDirective as ɵd, ColDirective as ɵe };
//# sourceMappingURL=ap-ui-lib.js.map
