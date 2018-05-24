import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { firebaseConfigForControls, firebaseConfigForSales } from './../app.module';

import * as firebase from 'firebase';

@Injectable()
export class ControlService {

  public ddb: FirebaseApp;
  private dbcontrols: AngularFireDatabase;
  private dbsales: AngularFireDatabase;

  constructor() {
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

  saveSelectedItems(basket) {
    localStorage.setItem('basket', JSON.stringify(basket));
  }

  saveSales(basket) {
    this.dbsales.list('/').push(basket);
  }

}

