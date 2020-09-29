import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html'
})
export class NameEditorComponent implements OnInit {

    fcName = new FormControl();
    formRegister = new FormGroup({
        username: new FormControl('newUser'),
        password: new FormControl(''),
    });

    constructor() { }

    ngOnInit(): void {
    }

    fcUpdateName() {
        this.fcName.setValue('formControl 上的setValue() 方法更新表单项~');
    }

    handleSubmit() {}
}
