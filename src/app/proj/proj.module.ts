import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjRoutingModule } from './proj-routing.module';
import { ProjecTsComponent } from './projec-ts/projec-ts.component';
import { CvPdfComponent } from './cv-pdf/cv-pdf.component';
import { DetailsOfprComponent } from './details-ofpr/details-ofpr.component';


@NgModule({
  declarations: [
    ProjecTsComponent,
    CvPdfComponent,
    DetailsOfprComponent
  ],
  imports: [
    CommonModule,
    ProjRoutingModule
  ]
})
export class ProjModule { }
