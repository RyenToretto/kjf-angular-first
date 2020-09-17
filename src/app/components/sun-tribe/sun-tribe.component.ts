import { Component, OnInit } from '@angular/core';

import {Hero} from '../../declares/hero';
import {HeroService} from '../../services/hero.service/hero.service';

@Component({
    selector: 'app-sun-tribe',
    templateUrl: './sun-tribe.component.html'
})
export class SunTribeComponent implements OnInit { // Angular 会在构造出 SunTribeComponent 的实例之后的某个合适的时机调用 ngOnInit()

    title: string = '太阳部落';

    hero: Hero = {
        id: 1,
        name: 'KouJianFeng'
    };
    heroes: Hero[];

    // 1. 声明了一个私有 heroService 属性
    // 2. 把它标记为一个 HeroService 的注入点
    // 当 Angular 创建 SunTribeComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象
    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    /****
     * 等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。
     * 然后 subscribe() 方法把这个英雄数组传给这个回调函数，
     * 该函数把英雄数组赋值给组件的 heroes 属性。
     *
     使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了
     ****/
    getHeroes(): void {
        this.heroService.requestHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

}
