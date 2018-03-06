import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TourNgBootstrapModule } from 'ngx-tour-ng-bootstrap';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';
import 'hammerjs';

import { SilkAppComponent} from './app.component';
import { AppRoutes} from "./app-routing.module";
import { MainComponent }   from './main/main.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';
import { MenuToggleModule } from './core/menu/menu-toggle.module';
import { MenuItems } from './core/menu/menu-items/menu-items';
import { HorizontalMenuItems } from './core/menu/menu-items/horizontal-menu-items';
import { PageTitleService } from './core/page-title/page-title.service';



export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		MaterialModule,
		RouterModule.forRoot(AppRoutes),
      PerfectScrollbarModule,
      MenuToggleModule,
      HttpModule,
      TourNgBootstrapModule.forRoot(),
      TranslateModule.forRoot({
		   provide: TranslateLoader,
		   useFactory: (createTranslateLoader),
		   deps: [Http]
		}),
	],
	declarations: [
		SilkAppComponent, 
		MainComponent,
		AuthLayoutComponent,
	],
	bootstrap: [SilkAppComponent],
	providers:[
		MenuItems,
      HorizontalMenuItems,
		PageTitleService,
      {
         provide: PERFECT_SCROLLBAR_CONFIG,
         useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }
	]
})
export class SilkAppModule { }
