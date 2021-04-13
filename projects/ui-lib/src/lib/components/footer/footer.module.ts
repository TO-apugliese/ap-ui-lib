import {NgModule}          from '@angular/core';
import {CommonModule}      from '@angular/common';
import {ApFooterComponent} from './footer.component';


@NgModule({
    declarations: [ApFooterComponent],
    imports:      [
        CommonModule,
    ],
    exports:      [ApFooterComponent],
})
export class ApFooterModule {}

export * from './footer.component';
