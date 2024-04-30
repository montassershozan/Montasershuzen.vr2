import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', redirectTo: '/about/summary', pathMatch: 'full' },
  { path: 'summary', component: SummaryComponent,title:'Summary' },
  { path: 'education', component: EducationComponent , title:'Education'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdSummRoutingModule {}
