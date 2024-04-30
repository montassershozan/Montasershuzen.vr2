import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EXPERIENCEComponent } from './experience/experience.component';
import { TECHNOLOGIESComponent } from './technologies/technologies.component';

const routes: Routes = [
  { path: '', redirectTo: '/experience/experience', pathMatch: 'full' },
  {path:"experience" , component:EXPERIENCEComponent,title:'experience'},
  {path:"technologies",component:TECHNOLOGIESComponent,title:'technologies'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperTechnRoutingModule { }
