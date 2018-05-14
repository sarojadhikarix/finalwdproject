import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressService]

})
export class ProgressComponent implements OnInit {

    constructor(private progressService: ProgressService) { }
    section = [];

    ngOnInit() {

      this.progressService.getControls().subscribe(data => {
        this.section = data;
      });

    }


}
