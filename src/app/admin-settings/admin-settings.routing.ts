import { Routes } from '@angular/router';

import { AdminSettingsComponent } from './admin-settings.component';

export const AdminSettingsRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: AdminSettingsComponent
  }]
}];
