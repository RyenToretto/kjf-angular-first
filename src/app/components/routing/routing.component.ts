import { Component, OnInit } from '@angular/core';

import {HeroService} from '../../services/hero.service/hero.service';
import {Hero} from '../../declares/hero';

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
    trackByItems(index: number, hero: Hero): number { return hero.id; }
}


