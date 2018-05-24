import {Injectable} from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FirebaseAppName, FirebaseApp } from 'angularfire2';
import { _firebaseAppFactory } from 'angularfire2/firebase.app.module';
import { firebaseConfigForControls, firebaseConfigForSales } from './../app.module';

import * as firebase from 'firebase';
import 'firebase/storage';

@Injectable()
export class ControlService{

  public ddb: FirebaseApp;

  constructor(private db: AngularFireDatabase) {
    
  }


  getControlsBike(bike){
    //this.db = new AngularFireDatabase(_firebaseAppFactory(firebaseConfigForControls, 'controls'));
    return this.db.list('/Bikes/' + bike + '/Components');
  }

  getControlsCustomize(bike, customize){
    return this.db.list('/Bikes/' + bike + '/Components/' + customize);
  }

  getControls(title){
    return  this.db.list('/' + title);
  }



  getSelectedItems(){
    let items = JSON.parse(localStorage.getItem('basket'));
    return items == null ? [] : items;
  }

  saveSelectedItems(basket){
    localStorage.setItem('basket', JSON.stringify(basket));
  }
}

