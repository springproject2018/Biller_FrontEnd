import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { PageTitleService } from '../core/page-title/page-title.service';
import {fadeInAnimation} from "../core/route-animation/route.animation";



@Component({
  selector: 'ms-upload-invoice',
  templateUrl: './upload-invoice.component.html',
  styleUrls: ['../../assets/scss/myStyle.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[@fadeInAnimation]": 'true'
   },
  animations: [ fadeInAnimation ]
})

export class UploadinvoiceComponent  {

    
    constructor(private pageTitleService: PageTitleService) {}

    ngOnInit() {

    }
    uploader: FileUploader = new FileUploader({url: 'https://evening-anchorage-3159.herokuapp.com/api/'});
    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }
}



