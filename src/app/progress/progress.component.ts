import { Component, OnInit, Input } from '@angular/core';
import { ControlService } from './../control/control.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ControlService]

})
export class ProgressComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  @Input() type;
  stepstitle: any[] = [];
  startstep = 0;
  currentstep = 0;
  completedpercentage: Number = 0;


  ngOnInit() {

    //const important to work async

    var controlSteps = ["Colorways", "Accessories", "Extras"];
    for (var i = 0; i < controlSteps.length; i++) {

      const name = controlSteps[i];

      this.controlService.getControls(name).subscribe(
        data => {
          this.stepstitle.push(name);
        });
    }

    this.controlService.getControlsBike(this.type).subscribe(
      data => {
        for (var i = 0; i < data.length; i++) {

          const index = i;

          this.stepstitle.push(data[index].$key);

        }
      });
  }

  getProgressBarStats(event){
    this.completedpercentage = (event.detail.currentstep / this.stepstitle.length) * 100;
    console.log(this.completedpercentage);
  }

}
