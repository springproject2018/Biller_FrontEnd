import { Routes } from '@angular/router';

import { UploadinvoiceComponent } from './upload-invoice.component';

export const UploadinvoiceRoutes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: UploadinvoiceComponent
  }]
}];
