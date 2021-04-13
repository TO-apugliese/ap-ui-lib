(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('uuid'), require('@angular/common'), require('@angular/forms'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ap-ui-lib', ['exports', '@angular/core', 'uuid', '@angular/common', '@angular/forms', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ap-ui-lib'] = {}, global.ng.core, global.uuid, global.ng.common, global.ng.forms, global.ng.router));
}(this, (function (exports, core, uuid, common, forms, router) { 'use strict';

    var AP_NAV_ITEMS = new core.InjectionToken('AP_NAV_ITEMS');

    var ApNavService = /** @class */ (function () {
        function ApNavService(items) {
            this.items = items;
        }
        Object.defineProperty(ApNavService.prototype, "currentPage", {
            get: function () {
                var path = window.location.pathname;
                return !!path
                    ? path.replace('/', '').toLowerCase()
                    : null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApNavService.prototype, "subItems", {
            get: function () {
                var _this = this;
                if (!!this.items && !!this.currentPage) {
                    var page = this.items.find(function (x) { return x.name === _this.currentPage; });
                    if (!page || !page.subItems)
                        return [];
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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var BaseComponent = /** @class */ (function () {
        function BaseComponent() {
            this.identifier = uuid.v4();
        }
        return BaseComponent;
    }());

    var FormComponent = /** @class */ (function (_super) {
        __extends(FormComponent, _super);
        function FormComponent() {
            return _super.call(this) || this;
        }
        Object.defineProperty(FormComponent.prototype, "labelKey", {
            get: function () {
                return "form." + this.field;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "value", {
            get: function () {
                return this.model[this.field];
            },
            set: function (value) {
                this.model[this.field] = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormComponent.prototype, "id", {
            get: function () {
                return this.field + "-" + this.identifier;
            },
            enumerable: false,
            configurable: true
        });
        return FormComponent;
    }(BaseComponent));
    FormComponent.propDecorators = {
        model: [{ type: core.Input }],
        field: [{ type: core.Input }]
    };

    var TextInputComponent = /** @class */ (function (_super) {
        __extends(TextInputComponent, _super);
        function TextInputComponent() {
            return _super.call(this) || this;
        }
        TextInputComponent.prototype.ngOnInit = function () {
            var _this = this;
            console.log({ maxCharacter: this.maxCharacter });
            if (!!this.maxCharacter) {
                var inter_1 = setInterval(function () {
                    if (!!M && !!M.characterCounter) {
                        clearInterval(inter_1);
                        var elems = document.querySelectorAll("#" + _this.id);
                        console.log({ elems: elems });
                        if (elems.length > 0) {
                            elems[0].setAttribute('data-length', _this.maxCharacter);
                            M.characterCounter.init(elems);
                        }
                    }
                }, 50);
            }
        };
        return TextInputComponent;
    }(FormComponent));
    TextInputComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-text-input',
                    template: "<div class=\"input-field\">\n    <i *ngIf=\"icon\" class=\"material-icons prefix\">{{icon}}</i>\n    <input [id]=\"id\" [(ngModel)]=\"value\" type=\"text\" class=\"validate\">\n    <label [for]=\"id\" [class.active]=\"!!value\">{{ labelKey }}</label>\n</div>\n"
                },] }
    ];
    TextInputComponent.ctorParameters = function () { return []; };
    TextInputComponent.propDecorators = {
        icon: [{ type: core.Input }],
        maxCharacter: [{ type: core.Input }]
    };

    var TextInputModule = /** @class */ (function () {
        function TextInputModule() {
        }
        return TextInputModule;
    }());
    TextInputModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [TextInputComponent],
                    imports: [
                        forms.FormsModule,
                        common.CommonModule,
                    ],
                    exports: [TextInputComponent],
                },] }
    ];

    var ApNavbarComponent = /** @class */ (function (_super) {
        __extends(ApNavbarComponent, _super);
        function ApNavbarComponent(navSrv) {
            var _this = _super.call(this) || this;
            _this.navSrv = navSrv;
            return _this;
        }
        ApNavbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            document.addEventListener('DOMContentLoaded', function () {
                var elem = document.querySelectorAll("." + _this.id);
                M.Sidenav.init(elem);
            });
        };
        Object.defineProperty(ApNavbarComponent.prototype, "id", {
            get: function () {
                return "mobile-menu-" + this.identifier;
            },
            enumerable: false,
            configurable: true
        });
        return ApNavbarComponent;
    }(BaseComponent));
    ApNavbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-navbar',
                    template: "<nav class=\"nav-extended\">\n    <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo\">Logo</a>\n        <a href=\"#\" data-target=\"mobile-menu\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n            <li *ngFor=\"let item of navSrv.items\">\n                <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n            </li>\n        </ul>\n    </div>\n\n    <div *ngIf=\"navSrv.subItems.length > 0\" class=\"nav-content\">\n        <ul class=\"tabs tabs-transparent\">\n            <li *ngFor=\"let item of navSrv.subItems\" class=\"tab\">\n                <a [routerLink]=\"navSrv.currentPage\" [fragment]=\"item.path\">{{item.name}}</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<ul [class]=\"'sidenav ' + id\" id=\"mobile-menu\">\n    <li *ngFor=\"let item of navSrv.items\">\n        <a [routerLink]=\"'/' + item.path\">{{item.name}}</a>\n    </li>\n</ul>\n"
                },] }
    ];
    ApNavbarComponent.ctorParameters = function () { return [
        { type: ApNavService }
    ]; };

    function navServiceFactory(items) {
        return new ApNavService(items);
    }
    var ApNavbarModule = /** @class */ (function () {
        function ApNavbarModule() {
        }
        ApNavbarModule.forRoot = function (items) {
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
        };
        return ApNavbarModule;
    }());
    ApNavbarModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ApNavbarComponent],
                    imports: [
                        common.CommonModule,
                        router.RouterModule
                    ],
                    exports: [ApNavbarComponent],
                },] }
    ];

    var ApFooterComponent = /** @class */ (function () {
        function ApFooterComponent() {
            this.dateNow = new Date();
        }
        Object.defineProperty(ApFooterComponent.prototype, "links", {
            get: function () {
                return this._links || [];
            },
            set: function (links) {
                this._links = links;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ApFooterComponent.prototype, "currentYear", {
            get: function () {
                return this.dateNow.getFullYear();
            },
            enumerable: false,
            configurable: true
        });
        return ApFooterComponent;
    }());
    ApFooterComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-footer',
                    template: "<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">\n          <ng-content select=\"[content-title]\"></ng-content>\n        </h5>\n        <p class=\"grey-text text-lighten-4\">\n          <ng-content select=\"[content-description]\"></ng-content>\n        </p>\n      </div>\n      <div *ngIf=\"links.length > 0\" class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li *ngFor=\"let link of links\">\n            <a class=\"grey-text text-lighten-3\" [href]=\"link.url\">{{link.text}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      \u00A9 {{currentYear}} <ng-content select=\"[copyright-text]\"></ng-content>\n    </div>\n  </div>\n</footer>\n"
                },] }
    ];
    ApFooterComponent.ctorParameters = function () { return []; };
    ApFooterComponent.propDecorators = {
        links: [{ type: core.Input }]
    };

    var ApFooterModule = /** @class */ (function () {
        function ApFooterModule() {
        }
        return ApFooterModule;
    }());
    ApFooterModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ApFooterComponent],
                    imports: [
                        common.CommonModule,
                    ],
                    exports: [ApFooterComponent],
                },] }
    ];

    var ApPageContainerComponent = /** @class */ (function () {
        function ApPageContainerComponent() {
        }
        Object.defineProperty(ApPageContainerComponent.prototype, "containerClass", {
            get: function () {
                if (!this.name)
                    throw Error('you need to pass a name');
                return this.name + "-page";
            },
            enumerable: false,
            configurable: true
        });
        return ApPageContainerComponent;
    }());
    ApPageContainerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ap-page-container',
                    template: "<div [ngClass]=\"containerClass\">\n    <ng-content></ng-content>\n</div>\n",
                    styles: ["[class*=-page]{min-height:550px;padding:40px}"]
                },] }
    ];
    ApPageContainerComponent.propDecorators = {
        name: [{ type: core.Input }]
    };

    var ApPageContainerModule = /** @class */ (function () {
        function ApPageContainerModule() {
        }
        return ApPageContainerModule;
    }());
    ApPageContainerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ApPageContainerComponent],
                    imports: [
                        common.CommonModule,
                    ],
                    exports: [ApPageContainerComponent],
                },] }
    ];

    var ButtonDirective = /** @class */ (function () {
        function ButtonDirective(el) {
            this.el = el;
            this.elementClass = 'waves-effect waves-light btn';
        }
        return ButtonDirective;
    }());
    ButtonDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[apButton]',
                },] }
    ];
    ButtonDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ButtonDirective.propDecorators = {
        elementClass: [{ type: core.HostBinding, args: ['class',] }]
    };

    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        return ButtonModule;
    }());
    ButtonModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ButtonDirective],
                    exports: [ButtonDirective],
                },] }
    ];

    var RowDirective = /** @class */ (function () {
        function RowDirective(el) {
            this.el = el;
            this.elementClass = 'row';
        }
        return RowDirective;
    }());
    RowDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[apRow]',
                },] }
    ];
    RowDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    RowDirective.propDecorators = {
        elementClass: [{ type: core.HostBinding, args: ['class',] }]
    };

    var ColDirective = /** @class */ (function () {
        function ColDirective() {
        }
        Object.defineProperty(ColDirective.prototype, "apCol", {
            set: function (value) {
                this._apCol = value;
                this.setClasses();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColDirective.prototype, "apPush", {
            set: function (value) {
                this._push = value;
                this.setClasses();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ColDirective.prototype, "apPull", {
            set: function (value) {
                this._pull = value;
                this.setClasses();
            },
            enumerable: false,
            configurable: true
        });
        ColDirective.prototype.setClasses = function () {
            var colClasses = this.getDevicesClasses(this._apCol).join(' ');
            var pushClasses = this.getDevicesClasses(this._push).map(function (x) { return "push-" + x; }).join(' ');
            var pullClasses = this.getDevicesClasses(this._pull).map(function (x) { return "pull-" + x; }).join(' ');
            this.elementClass = "col " + colClasses + " " + pushClasses + " " + pullClasses;
        };
        ColDirective.prototype.getDevicesClasses = function (value) {
            if (!value)
                return [];
            var deviceSizes = ['s', 'm', 'l', 'xl'];
            var sizes = value.split(',');
            if (sizes.length > 4)
                throw Error('to much sizes passed');
            return sizes
                .map(function (col, i) { return "" + deviceSizes[i] + col; });
        };
        return ColDirective;
    }());
    ColDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[apCol]',
                },] }
    ];
    ColDirective.propDecorators = {
        apCol: [{ type: core.Input }],
        apPush: [{ type: core.Input }],
        apPull: [{ type: core.Input }],
        elementClass: [{ type: core.HostBinding, args: ['class',] }]
    };

    var GridModule = /** @class */ (function () {
        function GridModule() {
        }
        return GridModule;
    }());
    GridModule.decorators = [
        { type: core.NgModule, args: [{
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

    exports.AP_NAV_ITEMS = AP_NAV_ITEMS;
    exports.ApFooterComponent = ApFooterComponent;
    exports.ApFooterModule = ApFooterModule;
    exports.ApNavService = ApNavService;
    exports.ApNavbarComponent = ApNavbarComponent;
    exports.ApNavbarModule = ApNavbarModule;
    exports.ApPageContainerComponent = ApPageContainerComponent;
    exports.ApPageContainerModule = ApPageContainerModule;
    exports.ButtonModule = ButtonModule;
    exports.GridModule = GridModule;
    exports.TextInputComponent = TextInputComponent;
    exports.TextInputModule = TextInputModule;
    exports.navServiceFactory = navServiceFactory;
    exports.ɵa = FormComponent;
    exports.ɵb = BaseComponent;
    exports.ɵc = ButtonDirective;
    exports.ɵd = RowDirective;
    exports.ɵe = ColDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ap-ui-lib.umd.js.map
