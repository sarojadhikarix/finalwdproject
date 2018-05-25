import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { firebaseConfigForControls, firebaseConfigForSales } from './../app.module';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class ControlService {

  public ddb: FirebaseApp;
  private dbcontrols: AngularFireDatabase;
  private dbsales: AngularFireDatabase;

  constructor(private _router : Router) {
    this.dbcontrols = new AngularFireDatabase(_firebaseAppFactory(firebaseConfigForControls, 'controls'));
    this.dbsales = new AngularFireDatabase(_firebaseAppFactory(firebaseConfigForSales, 'sales'));
  }


  getControlsBike(bike) {

    return this.dbcontrols.list('/Bikes/' + bike + '/Components');
  }

  getControlsCustomize(bike, customize) {
    return this.dbcontrols.list('/Bikes/' + bike + '/Components/' + customize);
  }

  getControls(title) {
    return this.dbcontrols.list('/' + title);
  }



  getSelectedItems() {
    let items = JSON.parse(localStorage.getItem('basket'));
    return items == null ? [] : items;
    
  }

  saveSelectedItems(type, basket) {
    let data = {
      type: type,
      items: basket
    };
    localStorage.setItem('basket', JSON.stringify(data));
  }

  saveSales(basket) {
    this.dbsales.list('/').push(basket);
    this.saveSelectedItems(null, null);
    alert('Shopping completed. Bike is on its way to you :-).');
    this._router.navigate(['/']);

  }

}
