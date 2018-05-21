import { Component, OnInit } from '@angular/core';

import { ControlService } from './../control/control.service';
import { Item } from './../control/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ControlService]
})
export class CartComponent implements OnInit {

  constructor(private controlService: ControlService) { }
  basket: Item[] = [];
  
  ngOnInit() {
    this.basket = this.controlService.getItems();
    console.log(this.basket);
  }

}
