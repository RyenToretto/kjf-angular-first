import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SunTribeComponent } from '../components/sun-tribe/sun-tribe.component';
import { MoonTribeComponent } from '../components/moon-tribe/moon-tribe.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroMessagesComponent } from '../components/hero-messages/hero-messages.component';
import { SvgComponent } from '../components/svg/svg.component';

const SHARED_COMPONENT = [
    SunTribeComponent,
    MoonTribeComponent,
    HeroDetailComponent,
    HeroMessagesComponent,
    SvgComponent
];

@NgModule({
    declarations: [...SHARED_COMPONENT],
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
    exports: [CommonModule, HttpClientModule, FormsModule, RouterModule, ...SHARED_COMPONENT],
    providers: [],
})
export class AppSharedModule {}
