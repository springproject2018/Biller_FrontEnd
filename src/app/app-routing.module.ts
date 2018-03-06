import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},{
  path: '',
  component: MainComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },{
    path: 'emails',
    loadChildren: './emails/emails.module#EmailsModule'
  },{
    path: 'chat',
    loadChildren: './chat/chat.module#ChatModule'
  },{
    path: 'features',
    loadChildren: './features/features.module#FeaturesModule'
  },{
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule'
  },{
    path: 'icons',
    loadChildren: './icons/icons.module#IconsModule'
  },{
    path: 'cards',
    loadChildren: './cards/cards.module#CardsModule'
  },{
    path: 'forms',
    loadChildren: './forms/forms.module#FormsDemoModule'
  },{
    path: 'tables',
    loadChildren: './tables/tables.module#TablesDemoModule'
  },{
    path: 'data-tables',
    loadChildren: './data-tables/datatables.module#DataTablesDemoModule'
  },{
    path: 'chart',
    loadChildren: './chart/charts.module#ChartsDemoModule'
  },{
    path: 'maps',
    loadChildren: './maps/maps.module#MapsDemoModule'
  },{
    path: 'pages',
    loadChildren: './custom-pages/pages.module#PagesDemoModule'
  },{
    path: 'user-pages',
    loadChildren: './user-pages/users.module#UsersModule'
  },{
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarDemoModule'
  },{
    path: 'media',
    loadChildren: './media/media.module#MediaModule'
  },{
    path: 'editor',
    loadChildren: './editor/editor.module#EditorDemoModule'
  },{
    path: 'biller',
    loadChildren: './biller/biller.module#BillerModule'
  },{
    path: 'billerprofile',
    loadChildren: './userprofile/userprofile.module#UserprofileModule'
  },{
    path: 'uploadinvoice-view',
    loadChildren: './uploadinvoices-view/uploadinvoices-view.module#UploadInvoicesViewModule'
  },{
    path: 'bank',
    loadChildren: './bank/bank.module#BankModule'
  },{
    path: 'uploadinvoice',
    loadChildren: './upload-invoice/upload-invoice.module#UploadinvoiceModule'
  },{
    path: 'enquiry',
    loadChildren: './enquiry/enquiry.module#EnquiryModule'
  },{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'authentication',
    loadChildren: './session/session.module#SessionModule'
  },{
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'admin-settings',
    loadChildren: './session/session.module#SessionModule'
  }]
}];

