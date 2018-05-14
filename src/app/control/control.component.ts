import { Component, OnInit } from '@angular/core';

import { ControlService } from './control.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private controlService : ControlService) { }

  ngOnInit() {
  }

}
