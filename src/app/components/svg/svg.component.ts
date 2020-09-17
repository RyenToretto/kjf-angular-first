import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-svg',
    templateUrl: './svg.component.svg'
})
export class SvgComponent {
    fillColor = 'rgb(255, 0, 0)';

    @Output() textClickEvent: EventEmitter<null> = new EventEmitter();

    changeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        this.fillColor = `rgb(${r}, ${g}, ${b})`;
    }

    textClick() {
        this.textClickEvent.emit();
    }
}
