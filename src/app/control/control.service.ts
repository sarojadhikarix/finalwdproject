import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ControlService{
  constructor(private http: Http) {
  }

  getControls(){
      var controls = {"Colorways":[{"id":1,"name":"Full Bike", "image":"fullbike"},{"id":2,"name":"Framekit", "image":"framekit"},{"id":3,"name":"Steps E8000 EBullitt Full Bike"}]};
      return controls;
  }

}

