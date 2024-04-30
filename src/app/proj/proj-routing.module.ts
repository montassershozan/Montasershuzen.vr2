import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjecTsComponent } from './projec-ts/projec-ts.component';
import { CvPdfComponent } from './cv-pdf/cv-pdf.component';
import { DetailsOfprComponent } from './details-ofpr/details-ofpr.component';

const routes: Routes = [
  {path:"",redirectTo:"/projects/cvPdf",pathMatch:"full"},
  {path:"projects" , component:ProjecTsComponent,title:'Projects'},
  {path:"cvPdf", component:CvPdfComponent,title:'Resume-Projects'},
  {path:"Details/:title", component:DetailsOfprComponent,title:'DetailsOfProject'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjRoutingModule { }
