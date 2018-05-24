import { Component, OnInit } from '@angular/core';

import { ControlService } from './../control/control.service';

@Component({
  selector: 'app-livepreview',
  templateUrl: './livepreview.component.html',
  styleUrls: ['./livepreview.component.css'],
  providers: [ControlService]
})
export class LivepreviewComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  basket = [];

  ngOnInit() {
  }

  getPreviewUpdated(event){
    this.basket = event.detail.Changes;
    console.log(this.basket);
  }

  isActive(key) {
    
    return this.checkIfExist(key); // check if the value exist and return true or false accordingly. 
    
  }

  checkIfExist(key) {
    if (this.basket.length >= 1) {
      for (let i = 0; i < this.basket.length; i++) {
        if (this.basket[i].name == key) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
  }

}
