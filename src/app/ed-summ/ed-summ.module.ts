import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdSummRoutingModule } from './ed-summ-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    SummaryComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    EdSummRoutingModule
  ]
})
export class EdSummModule { }
