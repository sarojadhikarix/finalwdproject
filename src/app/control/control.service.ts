import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class BuilderService{
  constructor(private http: Http) {
  }

  getControls(){
      var controls = ['Learning Angular 2', "Pro TypeScript", "ASP.NET"]; 
  }

}

