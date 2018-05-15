import { Component, OnInit } from '@angular/core';
import { ControlService } from './../control/control.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
  providers: [ControlService]
})
export class SelectionComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  types;

  ngOnInit() {
    this.controlService.getControls('Bikes').subscribe(
      data => {
        this.types = data;
      });
  }

}
