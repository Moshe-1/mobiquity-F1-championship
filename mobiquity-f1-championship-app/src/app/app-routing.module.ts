import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChampionsComponent} from "./components/champions/champions.component";

const routes: Routes = [
  // @description Router setting up redirects
  { path: 'champions', component: ChampionsComponent },
  { path: '',   redirectTo: '/champions', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
