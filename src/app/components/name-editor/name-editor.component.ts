import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html'
})
export class NameEditorComponent implements OnInit {

    fcName = new FormControl();

    constructor() { }

    ngOnInit(): void {
    }

}
