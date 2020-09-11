import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SunTribeComponent } from './sun-tribe/sun-tribe.component';

const routes: Routes = [
    { path: 'sunTribe', component: SunTribeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
