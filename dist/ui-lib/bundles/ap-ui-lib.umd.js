(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ap-ui-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ap-ui-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var UiLibService = /** @class */ (function () {
        function UiLibService() {
        }
        return UiLibService;
    }());
    UiLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UiLibService_Factory() { return new UiLibService(); }, token: UiLibService, providedIn: "root" });
    UiLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UiLibService.ctorParameters = function () { return []; };

    var UiLibComponent = /** @class */ (function () {
        function UiLibComponent() {
        }
        UiLibComponent.prototype.ngOnInit = function () {
        };
        return UiLibComponent;
    }());
    UiLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-ui-lib',
                    template: "\n    <p>\n      ui-lib works!\n    </p>\n  "
                },] }
    ];
    UiLibComponent.ctorParameters = function () { return []; };

    var UiLibModule = /** @class */ (function () {
        function UiLibModule() {
        }
        return UiLibModule;
    }());
    UiLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [UiLibComponent],
                    imports: [],
                    exports: [UiLibComponent]
                },] }
    ];

    /*
     * Public API Surface of ui-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.UiLibComponent = UiLibComponent;
    exports.UiLibModule = UiLibModule;
    exports.UiLibService = UiLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ap-ui-lib.umd.js.map
