import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';

import {HeroMessageService} from '../hero-message/hero-message.service';
import {Hero} from '../../declares/hero';
import {HEROES} from '../../mock-data/mock-heroes';

/**
 可以从任何地方获取数据：Web 服务、本地存储（LocalStorage）或一个模拟的数据源
 */
@Injectable({
    providedIn: 'root' // 用 根注入器 将 你的服务 注册成为提供者
})
export class HeroService {

    // 服务中的服务
    // Angular 将会在创建 HeroService 时把 HeroMessageService 的单例注入到这个属性中
    constructor(private heroMessageService: HeroMessageService) { }

    /****
     * 应用从远端服务器获取英雄数据，天生就是异步操作
     * HeroService 必须等服务器给出响应， 而 getHeroes() 不能立即返回英雄数据， 浏览器也不会在该服务等待期间停止响应
     * 所以 HeroService.getHeroes() 必须具有某种形式的异步函数： 如 rxjs 中 Observable 类的 实例对象
     *
     * 在最终会使用 Angular 的 HttpClient.get 方法来 ajax 获取英雄数据
     * 而 HttpClient.get() 会返回 Observable
     *
     这里使用 RxJS 的 of() 函数来模拟从服务器返回数据
     ****/
    requestHeroes(): Observable<Hero[]> {
        this.heroMessageService.addHeroMessage('HeroService: 请求到了 Heroes[]');
        return of(HEROES);
    }

    requestHeroById(id: number): Observable<Hero> {
        this.heroMessageService.addHeroMessage(`查询到一个英雄： id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}
