import { Component } from '@angular/core';

@Component({
  /**
   * 它会告诉 Angular，一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例
   *  比如，如果应用的 HTML 中包含 <app-root></app-root>，Angular 就会在这些标签中插入一个 AppComponent 实例的视图
   */
  selector: 'app-root', // 如何在 HTML 中引用该组件
  templateUrl: './app.component.html', // 组件的 html 资源，定义了该组件的宿主视图
  styleUrls: ['./app.component.scss'] // 组件的样式
  // 该组件需要哪些服务。当前组件所需若干服务的 提供者数组
})
export class AppComponent {
  title = 'kjf-angular-first';
}
