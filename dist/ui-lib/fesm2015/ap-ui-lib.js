import { InjectionToken, Injectable, Inject, Component, NgModule, Directive, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const AP_NAV_ITEMS = new InjectionToken('AP_NAV_ITEMS');

class ApNavService {
    constructor(items) {
        this.items = items;
    }
    get currentPage() {
        const path = window.location.pathname;
        return !!path ? path.split('/')[0] : null;
    }
    get subItems() {
        if (!!this.items && !!this.currentPage) {
            const page = this.items.find(x => x.name === this.currentPage);
            if (!page) {
                return [];
            }
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

class TextInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
TextInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-text-input',
                template: `
    <p>
      ui-lib works!
    </p>
  `
            },] }
];
TextInputComponent.ctorParameters = () => [];

class TextInputModule {
}
TextInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TextInputComponent],
                imports: [],
                exports: [TextInputComponent]
            },] }
];

class NavbarComponent {
    constructor(navSrv) {
        this.navSrv = navSrv;
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ap-navbar',
                template: "<nav class=\"nav-extended\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Logo</a>\n    <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li *ngFor=\"let item of navSrv.items\">\n        <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"nav-content\">\n    <ul class=\"tabs tabs-transparent\">\n      <li class=\"tab\"><a href=\"#test1\">Test 1</a></li>\n      <li class=\"tab\"><a class=\"active\" href=\"#test2\">Test 2</a></li>\n      <li class=\"tab disabled\"><a href=\"#test3\">Disabled Tab</a></li>\n      <li class=\"tab\"><a href=\"#test4\">Test 4</a></li>\n    </ul>\n  </div>-->\n</nav>\n\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li *ngFor=\"let item of navSrv.items\">\n    <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n  </li>\n</ul>\n\n<!--<div id=\"test1\" class=\"col s12\">Test 1</div>\n<div id=\"test2\" class=\"col s12\">Test 2</div>\n<div id=\"test3\" class=\"col s12\">Test 3</div>\n<div id=\"test4\" class=\"col s12\">Test 4</div>-->\n"
            },] }
];
NavbarComponent.ctorParameters = () => [
    { type: ApNavService }
];

function navServiceFactory(items) {
    return new ApNavService(items);
}
class NavbarModule {
    static forRoot(items) {
        return {
            ngModule: NavbarModule,
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
NavbarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NavbarComponent],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [NavbarComponent],
            },] }
];

class ApButtonDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.classList.add('waves-effect');
        this.el.nativeElement.classList.add('waves-light');
        this.el.nativeElement.classList.add('btn');
    }
}
ApButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: 'button[apButton]',
            },] }
];
ApButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];

class ApButtonModule {
}
ApButtonModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    ApButtonDirective
                ],
                declarations: [ApButtonDirective]
            },] }
];

/*
 * Public API Surface of ui-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AP_NAV_ITEMS, ApButtonModule, ApNavService, NavbarComponent, NavbarModule, TextInputComponent, TextInputModule, navServiceFactory, ApButtonDirective as ɵa };
//# sourceMappingURL=ap-ui-lib.js.map
