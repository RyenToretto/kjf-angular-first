import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RoutingComponent} from "../components/routing/routing.component";
import {SunTribeComponent} from "../components/sun-tribe/sun-tribe.component";

// 告诉路由器, 当 用户单击链接 或 将 URL 粘贴进浏览器地址栏 时，要显示哪个视图
const routes: Routes = [
    { path: '', redirectTo: '/routing', pathMatch: 'full' },
    { path: 'routing', component: RoutingComponent },

    { path: 'suntribe', component: SunTribeComponent }
];

@NgModule({
    // 在应用的顶层配置这个路由器。
    // forRoot() 方法会提供路由所需的服务提供者和指令，还会基于浏览器的当前 URL 执行首次导航
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]
})
export class AppRoutingModule { }
