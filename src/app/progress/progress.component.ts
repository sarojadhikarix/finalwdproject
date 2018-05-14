import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressItem = document.getElementsByClassName('progress-item').length;




  constructor() { }

  ngOnInit() {

  }

}
