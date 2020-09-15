import { NgModule } from '@angular/core';
import { ThyButtonModule } from 'ngx-tethys/button';
import { ThyFormModule } from 'ngx-tethys/form';
import { ThyTooltipModule } from 'ngx-tethys/tooltip';
import { ThyInputModule } from 'ngx-tethys/input';
import { ThyPopoverModule } from 'ngx-tethys/popover';
import { ThyIconModule } from 'ngx-tethys/icon';
import { ThyLoadingModule } from 'ngx-tethys/loading';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const THY_TETHYS_MODULES = [
    ThyButtonModule,
    ThyFormModule,
    ThyTooltipModule,
    ThyInputModule,
    ThyPopoverModule,
    ThyIconModule,
    ThyLoadingModule,
];

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, BrowserAnimationsModule, ...THY_TETHYS_MODULES],
    exports: [CommonModule, FormsModule, RouterModule, ...THY_TETHYS_MODULES],
    declarations: [],
    providers: [],
})
export class SharedModule {}
