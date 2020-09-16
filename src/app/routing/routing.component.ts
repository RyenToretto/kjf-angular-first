import { Component, OnInit } from '@angular/core';

import {Hero} from "../declares/hero";
import {HeroService} from "../hero.service";

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html'
})
export class RoutingComponent implements OnInit {
    routingHeroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getRoutingHeroes();
    }

    getRoutingHeroes(): void {
        this.heroService.requestHeroes()
            .subscribe(heroes => this.routingHeroes = heroes.slice(1, 5));
    }

}


