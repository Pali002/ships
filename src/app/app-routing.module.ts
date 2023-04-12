// * File: app-routing.module.ts
// * Author: Zentai Pál
// * Copyright: 2023, Zentai Pál
// * Group: Szoft-II-N
// * Date: 2023-04-12
// * Github: https://github.com/Pali002
// * Licenc: GNU GPL

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ShipComponent } from './ship/ship.component';


const routes: Routes = [
  { path: 'ship', component: ShipComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
