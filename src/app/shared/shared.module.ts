import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, BrowserAnimationsModule],
    exports: [CommonModule, FormsModule, RouterModule],
    declarations: [],
    providers: [],
})
export class AppSharedModule {}
