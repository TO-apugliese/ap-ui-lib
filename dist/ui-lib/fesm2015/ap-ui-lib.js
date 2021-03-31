import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class UiLibService {
    constructor() { }
}
UiLibService.ɵprov = ɵɵdefineInjectable({ factory: function UiLibService_Factory() { return new UiLibService(); }, token: UiLibService, providedIn: "root" });
UiLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
UiLibService.ctorParameters = () => [];

class UiLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
UiLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ui-lib',
                template: `
    <p>
      ui-lib works!
    </p>
  `
            },] }
];
UiLibComponent.ctorParameters = () => [];

class UiLibModule {
}
UiLibModule.decorators = [
    { type: NgModule, args: [{
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

export { UiLibComponent, UiLibModule, UiLibService };
//# sourceMappingURL=ap-ui-lib.js.map
