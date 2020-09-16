import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SunTribeComponent } from '../components/sun-tribe/sun-tribe.component';
import { MoonTribeComponent } from '../components/moon-tribe/moon-tribe.component';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail.component';
import { HeroMessagesComponent } from '../components/hero-messages/hero-messages.component';

const SHARED_COMPONENT = [SunTribeComponent, MoonTribeComponent, HeroDetailComponent, HeroMessagesComponent];

@NgModule({
    declarations: [...SHARED_COMPONENT],
    imports: [CommonModule, FormsModule, RouterModule],
    exports: [CommonModule, FormsModule, RouterModule, ...SHARED_COMPONENT],
    providers: [],
})
export class AppSharedModule {}
