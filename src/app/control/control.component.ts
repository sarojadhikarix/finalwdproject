import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from './control.service';
import { Item } from './item';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  providers: [ControlService]
})


export class ControlComponent implements OnInit {

  constructor(private controlService: ControlService,
    private _router: Router) { }
  @Input() type;
  stepsdata: any = {};
  stepstitle: any[] = [];
  startstep = 0;
  currentstep = 0;
  cangotocart: boolean = false;
  basket: Item[] = [];

  ngOnInit() {

    //const important to work async

    var controlSteps = ["Colorways", "Accessories", "Extras"];
    for (var i = 0; i < controlSteps.length; i++) {

      const name = controlSteps[i];

      this.controlService.getControls(name).subscribe(
        data => {

          this.stepsdata[name] = [];
          this.stepstitle.push(name);

          for (var j = 0; j < data.length; j++) {

            const keys = j;
            this.stepsdata[name].push(data[keys]);

          }
        });
    }

    this.controlService.getControlsBike(this.type).subscribe(
      data => {
        for (var i = 0; i < data.length; i++) {

          const index = i;

          this.stepstitle.push(data[index].$key);
          const customizeName = data[index].$key;
          this.stepsdata[customizeName] = [];

          this.controlService.getControlsCustomize(this.type, customizeName).subscribe(
            customize => {

              for (var j = 0; j < customize.length; j++) {
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
      if (this.currentstep == this.stepstitle.length - 1) {
        this.cangotocart = true;
      }
    }
  }

  back() {
    if (this.currentstep > 0) {
      this.currentstep = this.currentstep - 1;
      this.cangotocart = false;
    }
  }

  checkItem(key, price) {

    if (){      //check if the value exist.
      this.basket = this.basket.filter((item) => item.name != key);
    } else {
      let item = new Item(key, price);
      this.basket.push(item);
    }
    console.log(this.basket);
  }

  isActive(key) {
    return ; // check if the value exist and return true or false accordingly. 
  }

  complete() {
    this.controlService.saveItems(this.basket);
    this._router.navigate(['cart']);
  }

}
