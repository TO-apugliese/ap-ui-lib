import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {ApPageContainerComponent} from './page-container.component';

@NgModule({
    declarations: [ApPageContainerComponent],
    imports:      [
        CommonModule,
    ],
    exports:      [ApPageContainerComponent],
})
export class ApPageContainerModule {}

export * from './page-container.component';
