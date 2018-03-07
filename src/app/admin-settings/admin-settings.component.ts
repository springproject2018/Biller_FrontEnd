import { Component, OnInit,ViewEncapsulation , Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PageTitleService } from '../core/page-title/page-title.service';

@Component({
    selector: 'ms-admin-settings',
    templateUrl: './admin-settings.component.html',
    styleUrls: ['../../assets/scss/myStyle.scss'],
})
export class AdminSettingsComponent implements OnInit {
   	constructor() {

}
  	ngOnInit() {
    	};
}



