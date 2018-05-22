import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class ControlService{
  constructor(private db: AngularFireDatabase) {
  }
  

  getControlsBike(bike){
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

  getChoosenWizardRoute(){
    let items = JSON.parse(localStorage.getItem('wizardroute'));
    return items == null ? [] : items;
  }

  saveChoosenWizardRoute(wizardroute){
    localStorage.setItem('choosenroute', JSON.stringify(wizardroute));
  }

}
