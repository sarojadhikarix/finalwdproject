import { Component, OnInit } from '@angular/core';

import { ControlService } from './control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [ControlService]
})
export class ControlComponent implements OnInit {

  constructor(private controlService: ControlService) { }
  steps = [];
  stepstitle = [];
  controls;
  startstep = 1;
  endstep = 2;
  currentstep = 1;

  ngOnInit() {
    this.controlService.getControls('Choose Your Weapon').subscribe(
      data => {
        this.steps[1] = data;
        this.stepstitle[1] = 'Choose Your Weapon';
      });
    this.controlService.getControls('Colorways').subscribe(
      data => {
        this.steps[2] = data;
        this.stepstitle[2] = 'Colorways';
      });
    this.controlService.getControls('Drive Train').subscribe(
      data => {
        this.steps[3] = data;
        this.stepstitle[3] = 'Drive Train';
      });
    this.controlService.getControls('Customise').subscribe(
      data => {
        this.steps[4] = data;
        this.stepstitle[4] = 'Customise';
      });
    this.controlService.getControls('Accessories').subscribe(
      data => {
        this.steps[5] = data;
        this.stepstitle[5] = 'Accessories';
      });
    this.controlService.getControls('Extras').subscribe(
      data => {
        this.steps[6] = data;
        this.stepstitle[6] = 'Extras';
      });
  }

  next() {
    if (this.currentstep < 6) {
      this.currentstep = this.currentstep + 1;
    } else if (this.currentstep == 6) {
      document.getElementById('nextbutton').innerText = "Finish and Go to cart"
    }
  }

  back() {
    if (this.currentstep > 1) {
      this.currentstep = this.currentstep - 1;
      document.getElementById('nextbutton').innerText = "Next";
    }
  }

}
