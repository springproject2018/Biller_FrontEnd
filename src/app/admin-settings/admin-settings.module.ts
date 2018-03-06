import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminSettingsComponent } from './admin-settings.component';
import { AdminSettingsRoutes } from './admin-settings.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminSettingsRoutes)

  ],
  declarations: [
  AdminSettingsComponent
  ]
})
export class AdminSettingsModule { }
