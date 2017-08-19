import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './lifungs.routing';
import { Lifungs } from './lifungs.component';
import { Photosearch } from './components/photosearch/photosearch.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing,
  ],
  declarations: [
    Lifungs,
    Photosearch,
  ]
})
export class LifungsModule {
}
