import { IntroductionComponent } from './introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: 'introduction', component: IntroductionComponent  , title:'Introduction'},
  {
    path: 'about',
    loadChildren: () =>
      import('./ed-summ/ed-summ.module').then((m) => m.EdSummModule),title:'About'
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./exper-techn/exper-techn.module').then(
        (m) => m.ExperTechnModule
      ),title:'Experience'
  },
  {
    path: 'projects',
    loadChildren: () => import('./proj/proj.module').then((m) => m.ProjModule),title:'Projects'
  },
  { path: '**', component: NotFoundComponent ,title:'NotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
