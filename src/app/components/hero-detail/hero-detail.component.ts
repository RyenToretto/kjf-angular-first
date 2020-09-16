import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from '../../declares/hero';
import {HeroService} from '../../services/hero.service/hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    theHero: Hero;

    constructor(
        private route: ActivatedRoute, // 保存着 HeroDetailComponent实例的 路由信息
        private heroService: HeroService, // 从远端服务器获取英雄数据 api
        private location: Location // 一个 Angular 的服务，用来与浏览器打交道。 可以使用它来导航回上一个视图
    ) { }

    ngOnInit(): void {
        this.getHeroById();
    }

    getHeroById(): void {
        const id: number = +this.route.snapshot.paramMap.get('id');
        this.heroService.requestHeroById(id)
            .subscribe(hero => this.theHero = hero);
    }

    goBack(): void {
        this.location.back();
    }

}
