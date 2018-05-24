import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from './control.service';
import { Item } from './item';
import { empty } from 'rxjs/observable/empty';

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
  totalprice;

  @Output() progressBarUpdated = new EventEmitter();

  ngOnInit() {

    if (this.basket.length <= 0) {

      if (this.controlService.getSelectedItems() != []) {
        this.basket = this.controlService.getSelectedItems();
        this.findTotal();
      }
    }

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
    this.fireEvent();
  }

  back() {
    if (this.currentstep > 0) {
      this.currentstep = this.currentstep - 1;
      this.cangotocart = false;
    }
    this.fireEvent();
  }

  checkItem(key, price, about) {

    if (this.checkIfExist(key)) {      //check if the value exist.
      this.basket = this.basket.filter((item) => item.name != key);
    } else {
      let item = new Item(key, price, about);
      this.basket.push(item);
    }

    this.findTotal();
  }

  isActive(key) {
    return this.checkIfExist(key); // check if the value exist and return true or false accordingly.
  }

  complete() {
    this.controlService.saveSelectedItems(this.basket);
    this._router.navigate(['cart/' + this.type]);
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

  fireEvent() {
    // var evt = document.createEvent("HTMLEvents");
    // evt.initEvent('stepChanges', false, true);

    var evt = new CustomEvent(
      'stepChanges',
      { detail: { 'currentstep': this.currentstep + 1 } }
    );
    if (document.getElementById('mainProgressBar') != null) {
      document.getElementById('mainProgressBar').dispatchEvent(evt);
    }
  }

  findTotal() {
    this.totalprice = 0;
    if (this.basket.length >= 1) {
      for (let i = 0; i < this.basket.length; i++) {
        if (typeof this.basket[i].price != 'undefined' && parseFloat(this.basket[i].price) > 0) {
            this.totalprice = this.totalprice + parseFloat(this.basket[i].price);
        }
      }
    }
  }

}
