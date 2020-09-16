import { Component, OnInit } from '@angular/core';

import {HeroMessageService} from '../../services/hero-message/hero-message.service';

@Component({
    selector: 'app-hero-messages',
    templateUrl: './hero-messages.component.html'
})
export class HeroMessagesComponent implements OnInit {

    // 属性必须是公共属性，因为你将会在模板中绑定到它
    constructor(public heroMessageService: HeroMessageService) { }

    ngOnInit(): void {
    }

}
