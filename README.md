## docker windows

slmgr.vbs /upk
slmgr /ipk NPPR9-FWDCX-D2C8J-H872K-2YT43
slmgr /skms zh.us.to
slmgr /ato

## mark
    git push -u origin master

## Angular190715

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 目录描述
``` project
    /e2e/
    /src/
    ----app/ 工作目录
    ----assets/ 静态资源
    ----environments/ 环境配置
    ----favicon.ico
    ----index.html 入口
    ----main.ts 应用入口
    ----polyfills.ts
    ----styles.css
    ----test.ts

    /package.json 配置文件依赖

    /tsconfig.json 配置 typescript /* Tsee: https://angular.io/config/tsconfig. */
    /tsconfig.spec.json 配置 typescript /* see: https://angular.io/config/solution-tsconfig. */

    /.editorconfig 编辑器配置文件
```
