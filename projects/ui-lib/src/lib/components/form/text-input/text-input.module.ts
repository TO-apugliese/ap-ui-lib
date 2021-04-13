import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import {FormsModule}        from '@angular/forms';
import {TextInputComponent} from './text-input.component';

@NgModule({
    declarations: [TextInputComponent],
    imports:      [
        FormsModule,
        CommonModule,
    ],
    exports:      [TextInputComponent],
})
export class TextInputModule {}
