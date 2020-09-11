import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeroMessageService {

    heroMessages: string[] = []; // heroMessages 缓存

    constructor() { }

    // 往缓存中添加一条消息
    addHeroMessage(heroMessage: string) {
        this.heroMessages.push(heroMessage);
    }

    // 清空缓存
    clearHeroMessages() {
        this.heroMessages = [];
    }
}
