import { Component, OnInit, OnDestroy, ViewChild, HostListener, ViewEncapsulation }      from '@angular/core';
import { MenuItems } from '../core/menu/menu-items/menu-items';
import { HorizontalMenuItems } from '../core/menu/menu-items/horizontal-menu-items';
import { PageTitleService } from '../core/page-title/page-title.service';
import { TranslateService } from 'ng2-translate/ng2-translate';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import { TourService } from 'ngx-tour-ng-bootstrap';
import PerfectScrollbar from 'perfect-scrollbar';
import { PerfectScrollbarConfigInterface,
PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
const screenfull = require('screenfull');

@Component({
    selector: 'silk-layout',
  	templateUrl:'./main-material.html',
  	styleUrls: ['./main-material.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit, OnDestroy{
    
    private _router: Subscription;
    header: string;
    currentLang = 'ar';
    url: string;
    showSettings = false;
    dark: boolean;
    boxed: boolean;
    horizontalMenu : boolean;
    collapseSidebar: boolean;
    compactSidebar: boolean;
    customizerIn: boolean = false;
    headerGreen: boolean = false;
    headerRed: boolean = false;
    headerYellow: boolean = false;
    root = 'rtl';
    chatpanelOpen: boolean = false;
    themeHeaderSkinColor: any = "header-default";
    themeSidebarSkinColor: any = "sidebar-default";
    
    private _mediaSubscription: Subscription;
    sidenavOpen: boolean = true;
    sidenavMode: string = 'side';
    isMobile: boolean = false;
    private _routerEventsSubscription: Subscription;
    
    @ViewChild('sidenav') sidenav;
 public config: PerfectScrollbarConfigInterface = {};
	constructor(public tourService: TourService, public menuItems: MenuItems, public horizontalMenuItems: HorizontalMenuItems, private pageTitleService: PageTitleService, public translate: TranslateService, private router: Router, private media: ObservableMedia) {
        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ar/) ? browserLang : 'ar');
        
    this.tourService.events$.subscribe(console.log);

    this.tourService.start();

    }

    ngOnInit() {
        this.pageTitleService.title.subscribe((val: string) => {
            this.header = val;
        });
        
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            this.url = event.url;
        });
        
        if (this.url != '/session/login' && this.url != '/session/register' && this.url != '/session/forgot-password' && this.url != '/session/lockscreen') {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar-container ');
           

            if (window.matchMedia(`(min-width: 960px)`).matches) {
                // Ps.initialize(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
               const ps = new PerfectScrollbar(elemSidebar, {
                              wheelSpeed: 2,
                              suppressScrollX: true
                            });
            }
        }
        if (this.media.isActive('xs') || this.media.isActive('sm')){
            this.sidenavMode = 'over';
            this.sidenavOpen = false;
       
        }
        this._mediaSubscription = this.media.asObservable().subscribe((change: MediaChange) => {
            let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

            this.isMobile = isMobile;
            this.sidenavMode = (isMobile) ? 'over' : 'side';
            this.sidenavOpen = !isMobile;
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
          if (event instanceof NavigationEnd && this.isMobile) {
            this.sidenav.close();
          }
        });
    }

    ngOnDestroy() {
        this._router.unsubscribe();
        this._mediaSubscription.unsubscribe();
    }

	isFullscreen: boolean = false;
    
    menuMouseOver(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'over';
        }
    }

    menuMouseOut(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && this.collapseSidebar) {
            this.sidenav.mode = 'side';
        }
    }

	toggleFullscreen() {
    	if (screenfull.enabled) {
    		screenfull.toggle();
      		this.isFullscreen = !this.isFullscreen;
    	}
  	}
    
    customizerFunction() {
        this.customizerIn = !this.customizerIn;
    }
    headerSkinColorFunction(color) {
        this.themeHeaderSkinColor = color;
    }
    sidebarSkinColorFunction(color) {
        this.themeSidebarSkinColor = color;
    }
    addMenuItem(): void {
        this.menuItems.add({
            state: 'pages',
            name: 'SILK MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                {state: 'blank', name: 'SUB MENU1'},
                {state: 'blank', name: 'SUB MENU2'}
            ]
        });
    }
    
    onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

}


