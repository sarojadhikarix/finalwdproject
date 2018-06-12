import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

  constructor( private _route: ActivatedRoute, private _router: Router ) { }

  type;
  subscription;

  ngOnInit() {
    this.subscription = this._route.params.subscribe(params => {
      this.type = params['type'];
    });

    if(this.type != 'Framekit' && this.type != 'Full Bike' && this.type != 'Steps e8000 ebullitt full bike' && this.type != 'Steps ebullit full bike'){
      this._router.navigate(['**']);
    }
  }

}
