import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SunTribeComponent } from '../components/sun-tribe/sun-tribe.component';
import { MoonTribeComponent } from '../components/moon-tribe/moon-tribe.component';
import { NameEditorComponent } from '../components/name-editor/name-editor.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroMessagesComponent } from '../components/hero-messages/hero-messages.component';
import { SvgComponent } from '../components/svg/svg.component';

import {HoverChangeBgColorDirective} from './directives/hover-change-bg-color.directive';
import {VueLikeElseDirective} from './directives/vue-like-else.directive';


const SHARED_COMPONENT = [
    HoverChangeBgColorDirective,
    VueLikeElseDirective,

    SunTribeComponent,
    MoonTribeComponent,
    NameEditorComponent,
    HeroDetailComponent,
    HeroMessagesComponent,
    SvgComponent
];

@NgModule({
    declarations: [...SHARED_COMPONENT],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ...SHARED_COMPONENT
    ],
    providers: [],
})
export class AppSharedModule {}
