(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ap-ui-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ap-ui-lib'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var UiLibService = /** @class */ (function () {
        function UiLibService() {
        }
        return UiLibService;
    }());
    UiLibService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function UiLibService_Factory() { return new UiLibService(); }, token: UiLibService, providedIn: "root" });
    UiLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    UiLibService.ctorParameters = function () { return []; };

    var TextInputComponent = /** @class */ (function () {
        function TextInputComponent() {
        }
        TextInputComponent.prototype.ngOnInit = function () {
        };
        return TextInputComponent;
    }());
    TextInputComponent.decorators = [
        { type: i0.Component, args: [{
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
        { type: i0.NgModule, args: [{
                    declarations: [TextInputComponent],
                    imports: [],
                    exports: [TextInputComponent]
                },] }
    ];

    /*
     * Public API Surface of ui-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TextInputComponent = TextInputComponent;
    exports.TextInputModule = TextInputModule;
    exports.UiLibService = UiLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ap-ui-lib.umd.js.map
