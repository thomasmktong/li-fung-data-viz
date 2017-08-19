import { Routes, RouterModule }  from '@angular/router';

import { Lifungs } from './lifungs.component';
import { Photosearch } from './components/photosearch/photosearch.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Lifungs,
    children: [
      { path: 'photosearch', component: Photosearch }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
