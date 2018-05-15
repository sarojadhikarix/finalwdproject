import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor( private _route: ActivatedRoute ) { }

  type;
  subscription;

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => {
      this.type = params['type'];
    });
  }

}
