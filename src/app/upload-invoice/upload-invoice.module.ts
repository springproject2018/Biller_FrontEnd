import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TreeModule } from 'angular-tree-component';
import { DirectivesModule } from '../core/widgster/directives.module';


import { FormsRoutes } from '../forms/forms.routing';

import { UploadinvoiceComponent } from './upload-invoice.component';
import { UploadinvoiceRoutes } from './upload-invoice.routing';

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
    RouterModule.forChild(UploadinvoiceRoutes)

  ],
  declarations: [
  UploadinvoiceComponent
  ]
})
export class UploadinvoiceModule { }
