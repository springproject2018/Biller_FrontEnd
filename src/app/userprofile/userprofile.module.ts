import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { UserprofileComponent } from './userprofile.component';
import { UserprofileRoutes } from './userprofile.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(UserprofileRoutes)
  ],
  declarations: [
    UserprofileComponent,DialogComponent
  ]
})
export class UserprofileModule { }
