import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../declares/hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    @Input() theHero: Hero;

    constructor() { }

    ngOnInit(): void {
    }

}
