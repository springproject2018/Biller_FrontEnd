import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'ms-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['../../assets/scss/myStyle.scss'],
    animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ]) ],
})
export class UserprofileComponent implements OnInit {

 openModal(){
       (<any>this).display='block'; 
    }

  onCloseHandled(){
       (<any>this).display='none'; 

    }

  constructor() { }

  ngOnInit() {
  }

}
