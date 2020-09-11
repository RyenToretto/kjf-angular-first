import { Component, OnInit } from '@angular/core';

import {HEROES} from '../mock-data/mock-heroes';
import {Hero} from '../declares/hero';

@Component({
    selector: 'app-sun-tribe',
    templateUrl: './sun-tribe.component.html',
    styleUrls: ['./sun-tribe.component.scss']
})
export class SunTribeComponent implements OnInit {
    selectedHero: Hero = {};

    hero: Hero = {
        id: 1,
        name: 'KouJianFeng'
    };
    heroes: Hero[] = HEROES;

    constructor() { }

    ngOnInit(): void {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

}
