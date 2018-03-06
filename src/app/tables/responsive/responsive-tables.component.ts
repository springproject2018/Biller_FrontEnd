import { Component, OnInit,ViewEncapsulation }      from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import {fadeInAnimation} from "../../core/route-animation/route.animation";

@Component({
    selector: 'ms-responsive-tables',
  	templateUrl:'./responsive-tables-component.html',
 	  styleUrls: ['./responsive-tables-component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        "[@fadeInAnimation]": 'true'
    },
    animations: [ fadeInAnimation ]
})
export class ResponsiveTablesComponent implements OnInit {

	constructor(private pageTitleService: PageTitleService) {}

   	ngOnInit() {
    	this.pageTitleService.setTitle("Responsive Tables");
   	}

 
}


