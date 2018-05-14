import { Component, OnInit } from '@angular/core';

import { ControlService } from './control.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers:[ControlService]
})
export class ControlComponent implements OnInit {

  constructor(private controlService : ControlService) { }

  controls;

  ngOnInit() {
    this.controlService.getControls().subscribe(
      data => {
        this.controls = data;
        console.log(data);
      }
  }

}
