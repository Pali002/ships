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
