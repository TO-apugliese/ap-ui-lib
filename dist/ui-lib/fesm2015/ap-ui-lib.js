import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class UiLibService {
    constructor() { }
}
UiLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UiLibService_Factory() { return new UiLibService(); }, token: UiLibService, providedIn: "root" });
UiLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UiLibService.ctorParameters = () => [];

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

/*
 * Public API Surface of ui-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TextInputComponent, TextInputModule, UiLibService };
//# sourceMappingURL=ap-ui-lib.js.map
