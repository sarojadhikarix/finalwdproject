import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ControlService } from './../control/control.service';
import { Item } from './../control/item';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ControlService]
})
export class CartComponent implements OnInit {

  constructor(private controlService: ControlService,
              private _route: ActivatedRoute) { }

  basket: Item[] = [];
  total: number = 0;
  type;
  
  ngOnInit() {

    this._route.params.subscribe(params => {
      this.type = params['type'];
    });

    this.basket = this.controlService.getSelectedItems();

    this.findTotal();
  }

  findTotal(){
    if(this.basket.length >= 1){
    for(let i=0; i<this.basket.length; i++){
      this.total = this.total + parseInt(this.basket[i].price);
    }
    }
  }

  deleteItem(key){
    this.basket = this.basket.filter((item) => item.name != key);
    this.total = 0;
    this.findTotal();

  }

}
