import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { DirectivesModule } from '../core/widgster/directives.module';
import { DialogComponent } from '../dialog/dialog.component';

import { BillerComponent } from './biller.component';
import { BillerRoutes } from './biller.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FileUploadModule,
    NgxDatatableModule,
    TreeModule,
    DirectivesModule,
    RouterModule.forChild(BillerRoutes)

  ],
  declarations: [
  BillerComponent 
  ]
})
export class BillerModule { }
