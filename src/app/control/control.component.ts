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
  stepsdata:any = {};
  stepstitle:any[] = [];
  startstep = 0;
  currentstep = 0;

  ngOnInit() {

    //const important to work async

    var controlSteps = ["Colorways","Accessories","Extras"];
    for(var i = 0; i < controlSteps.length; i++){

      const name = controlSteps[i];

      this.controlService.getControls(name).subscribe(
        data => {

          this.stepsdata[name] = [];
          this.stepstitle.push(name);

          for(var j = 0; j < data.length; j++){

            const keys = j;
            this.stepsdata[name].push(data[keys]);

          }
      });
    }

    this.controlService.getControlsBike('Steps e8000 ebullitt full bike').subscribe(
      data => {
        for(var i = 0; i < data.length; i++){
          const index = i;

          this.stepstitle.push(data[index].$key);
          const customizeName = data[index].$key;
          this.stepsdata[customizeName] = [];

          this.controlService.getControlsCustomize('Steps e8000 ebullitt full bike', customizeName).subscribe(
            customize => {

              for(var j = 0; j < customize.length; j++){
                const k = j;

                this.stepsdata[customizeName].push(customize[k]);

              }
          });
        }
      });

  }

  next() {
    if (this.currentstep < this.stepstitle.length - 1) {
      this.currentstep = this.currentstep + 1;
    }
    else if (this.currentstep == this.stepstitle.length - 1) {
      document.getElementById('nextbutton').innerText = "Finish and Go to cart";
    }
  }

  back() {
    if (this.currentstep > 0) {
      this.currentstep = this.currentstep - 1;
      document.getElementById('nextbutton').innerText = "Next";
    }
  }

}
