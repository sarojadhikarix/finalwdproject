import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class ControlService{
  constructor(private db: AngularFireDatabase) {
  }

  getControls(){
    return  this.db.list('/');
  }

}

