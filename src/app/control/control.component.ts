import { Component, OnInit, Input } from '@angular/core';

import { ControlService } from './control.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [ControlService]
})



export class ControlComponent implements OnInit {

  constructor(private controlService: ControlService) { }
  @Input() type;
  steps = [];
  stepstitle = [];
  controls;
  startstep = 0;
  endstep = 5;
  currentstep = 0;
  

  ngOnInit() {

    this.controlService.getControls('Bikes/' + this.type ).subscribe(
      data => {
        this.controls = data;
        console.log(this.controls);
      });
  }

  next() {
    if (this.currentstep < 5) {
      this.currentstep = this.currentstep + 1;
    } else if (this.currentstep == 5) {
      document.getElementById('nextbutton').innerText = "Finish and Go to cart"
    }
  }

  back() {
    if (this.currentstep > 0) {
      this.currentstep = this.currentstep - 1;
      document.getElementById('nextbutton').innerText = "Next";
    }
  }

}
