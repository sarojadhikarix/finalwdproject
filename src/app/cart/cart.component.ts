import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ControlService } from './../control/control.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ControlService]
})
export class CartComponent implements OnInit {

  constructor(private controlService: ControlService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  basket = [];
  total: number = 0;
  type: string = '';

  ngOnInit() {

    let data = this.controlService.getSelectedItems();
    this.type = data['type'];
    this.basket = data.items;
    this.findTotal();
  }

  findTotal() {
    if (this.basket.length >= 1) {
      for (let i = 0; i < this.basket.length; i++) {
        if (typeof this.basket[i].price != 'undefined' && this.basket[i].price > 0) {
          this.total = this.total + parseFloat(this.basket[i].price);
        }
      }
    }
  }

  deleteItem(key) {
    if (confirm("Are you sure that you want to delete '" + key + "' component?")) {
      this.basket = this.basket.filter((item) => item.name != key);
      this.total = 0;
      this.findTotal();
    }
  }

  checkOut() {
    this.controlService.saveSales(this.basket);
  }

  backToShopping() {
    this.controlService.saveSelectedItems(this.type, this.basket);
    this._router.navigate(['builder/' + this.type]);
  }

}
