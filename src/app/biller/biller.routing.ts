import { Routes } from '@angular/router';

import { BillerComponent } from './biller.component';

export const BillerRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: BillerComponent
  }]
}];
