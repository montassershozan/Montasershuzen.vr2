import { TECHNOLOGIESComponent } from './technologies/technologies.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperTechnRoutingModule } from './exper-techn-routing.module';
import { EXPERIENCEComponent } from './experience/experience.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
    declarations: [
        EXPERIENCEComponent,
        TECHNOLOGIESComponent,
        SliderComponent,
    ],
    imports: [
        CommonModule,
        ExperTechnRoutingModule,
    ]
})
export class ExperTechnModule { }
