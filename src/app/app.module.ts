import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { RoutingComponent } from './components/routing/routing.component';

import { AppSharedModule } from './shared/shared.module';

// NgModule 为 该模块中的 组件 提供了 一个 编译上下文环境
@NgModule({
    declarations: [ // （可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道
        AppComponent,
        RoutingComponent,
    ],
    // exports: [ AppComponent ], // 其他模块永远不需要导入 根模块，所以这个属性在根模块永远用不着
    imports: [ // （导入表） —— 那些导出了本模块中的组件模板所需的类的 其它模块
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppSharedModule
    ],
    providers: [], // 本模块向全局服务中贡献的那些服务的创建器。 这些服务能被本应用中的任何部分使用
    bootstrap: [AppComponent] // 应用的主视图，称为根组件。它是应用中所有其它视图的宿主。只有根模块才应该设置这个 bootstrap 属性
})
export class AppModule { }
