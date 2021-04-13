import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[apCol]',
})
export class ColDirective {
    protected _apCol: string;
    protected _push: string;
    protected _pull: string;

    @Input()
    set apCol(value: string) {
        this._apCol = value;
        this.setClasses();
    }

    @Input()
    set apPush(value: string) {
        this._push = value;
        this.setClasses();
    }

    @Input()
    set apPull(value: string) {
        this._pull = value;
        this.setClasses();
    }

    @HostBinding('class')
    elementClass: string;

    setClasses(): void {
        const colClasses = this.getDevicesClasses(this._apCol).join(' ');
        const pushClasses = this.getDevicesClasses(this._push).map(x => `push-${x}`).join(' ');
        const pullClasses = this.getDevicesClasses(this._pull).map(x => `pull-${x}`).join(' ');

        this.elementClass = `col ${colClasses} ${pushClasses} ${pullClasses}`;
    }

    getDevicesClasses(value: string): string[] {
        if (!value) return [];

        const deviceSizes = ['s', 'm', 'l', 'xl'];
        const sizes = value.split(',');
        if (sizes.length > 4) throw Error('to much sizes passed');

        return sizes
            .map((col, i) => `${deviceSizes[i]}${col}`);
    }
}
