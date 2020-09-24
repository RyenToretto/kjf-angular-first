import {Component, AfterViewInit, OnDestroy, ViewChild} from '@angular/core';

import {SvgComponent} from './components/svg/svg.component';

@Component({
    /**
     * 它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例
     *  比如，如果应用的 HTML 中包含 <app-root></app-root>，Angular 就会在这些标签中插入一个 AppComponent 实例的视图
     */
    selector: 'app-root', // 如何在 HTML 中引用该组件
    templateUrl: './app.component.html', // 组件的 html 资源，定义了该组件的宿主视图
    // 该组件需要哪些服务。当前组件所需若干服务的 提供者数组
})
export class AppComponent implements AfterViewInit, OnDestroy {
    title = '我的部落';
    @ViewChild(SvgComponent, {static: false}) private svgComponent: SvgComponent;

    private intervalId: number;

    ngAfterViewInit() {
        this.svgComponent && this.svgComponent.changeColor();
    }

    appStopTimer() {
        clearInterval(this.intervalId);
    }

    ngOnDestroy() {
        this.appStopTimer();
    }
}
