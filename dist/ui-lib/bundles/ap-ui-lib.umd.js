(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ap-ui-lib', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ap-ui-lib'] = {}, global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var AP_NAV_ITEMS = new core.InjectionToken('AP_NAV_ITEMS');

    var ApNavService = /** @class */ (function () {
        function ApNavService(items) {
            this.items = items;
        }
        Object.defineProperty(ApNavService.prototype, "currentPage", {
            get: function () {
                var path = window.location.pathname;
                return !!path ? path.split('/')[0] : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApNavService.prototype, "subItems", {
            get: function () {
                var _this = this;
                if (!!this.items && !!this.currentPage) {
                    var page = this.items.find(function (x) { return x.name === _this.currentPage; });
                    if (!page) {
                        return [];
                    }
                    return page.subItems;
                }
                return [];
            },
            enumerable: false,
            configurable: true
        });
        return ApNavService;
    }());
    ApNavService.decorators = [
        { type: core.Injectable }
    ];
    ApNavService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: core.Inject, args: [AP_NAV_ITEMS,] }] }
    ]; };

    var TextInputComponent = /** @class */ (function () {
        function TextInputComponent() {
        }
        TextInputComponent.prototype.ngOnInit = function () {
        };
        return TextInputComponent;
    }());
    TextInputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-text-input',
                    template: "\n    <p>\n      ui-lib works!\n    </p>\n  "
                },] }
    ];
    TextInputComponent.ctorParameters = function () { return []; };

    var TextInputModule = /** @class */ (function () {
        function TextInputModule() {
        }
        return TextInputModule;
    }());
    TextInputModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TextInputComponent],
                    imports: [],
                    exports: [TextInputComponent]
                },] }
    ];

    var NavbarComponent = /** @class */ (function () {
        function NavbarComponent(navSrv) {
            this.navSrv = navSrv;
        }
        return NavbarComponent;
    }());
    NavbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-navbar',
                    template: "<nav class=\"nav-extended\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo\">Logo</a>\n    <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li *ngFor=\"let item of navSrv.items\">\n        <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <!--<div class=\"nav-content\">\n    <ul class=\"tabs tabs-transparent\">\n      <li class=\"tab\"><a href=\"#test1\">Test 1</a></li>\n      <li class=\"tab\"><a class=\"active\" href=\"#test2\">Test 2</a></li>\n      <li class=\"tab disabled\"><a href=\"#test3\">Disabled Tab</a></li>\n      <li class=\"tab\"><a href=\"#test4\">Test 4</a></li>\n    </ul>\n  </div>-->\n</nav>\n\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li *ngFor=\"let item of navSrv.items\">\n    <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n  </li>\n</ul>\n\n<!--<div id=\"test1\" class=\"col s12\">Test 1</div>\n<div id=\"test2\" class=\"col s12\">Test 2</div>\n<div id=\"test3\" class=\"col s12\">Test 3</div>\n<div id=\"test4\" class=\"col s12\">Test 4</div>-->\n"
                },] }
    ];
    NavbarComponent.ctorParameters = function () { return [
        { type: ApNavService }
    ]; };

    function navServiceFactory(items) {
        return new ApNavService(items);
    }
    var NavbarModule = /** @class */ (function () {
        function NavbarModule() {
        }
        NavbarModule.forRoot = function (items) {
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
        };
        return NavbarModule;
    }());
    NavbarModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [NavbarComponent],
                    imports: [
                        common.CommonModule,
                        router.RouterModule
                    ],
                    exports: [NavbarComponent],
                },] }
    ];

    var ApButtonDirective = /** @class */ (function () {
        function ApButtonDirective(el) {
            this.el = el;
        }
        ApButtonDirective.prototype.ngOnInit = function () {
            this.el.nativeElement.classList.add('waves-effect');
            this.el.nativeElement.classList.add('waves-light');
            this.el.nativeElement.classList.add('btn');
        };
        return ApButtonDirective;
    }());
    ApButtonDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'button[apButton]',
                },] }
    ];
    ApButtonDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };

    var ApButtonModule = /** @class */ (function () {
        function ApButtonModule() {
        }
        return ApButtonModule;
    }());
    ApButtonModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.AP_NAV_ITEMS = AP_NAV_ITEMS;
    exports.ApButtonModule = ApButtonModule;
    exports.ApNavService = ApNavService;
    exports.NavbarComponent = NavbarComponent;
    exports.NavbarModule = NavbarModule;
    exports.TextInputComponent = TextInputComponent;
    exports.TextInputModule = TextInputModule;
    exports.navServiceFactory = navServiceFactory;
    exports.ɵa = ApButtonDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ap-ui-lib.umd.js.map
