import { Component, OnInit } from '@angular/core';
import { ControlService } from './../control/control.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
  providers: [ControlService]
})
export class SelectionComponent implements OnInit {

  constructor(private controlService: ControlService) { }

  types;
  active = true;


  ngOnInit() {
    this.controlService.getControls('Bikes').subscribe(
      data => {
        this.types = data;
      });

  }

  selectSlide(number){

    if(this.active){
      this.active = false;

      $(".slide").each(function(){

        var position = $(this).index() * 100;
        $(this).animate({
          "marginLeft" : position - number * 100 + "vw"
        }, 1000,"swing");
      }).promise().done(() => {
          this.active = true;
      });
    }
  }

  slideBack(){

    if(this.active && $(".slide")[0].style.marginLeft != "0vw"){
      this.animateSlide(100);
    }
    else if(this.active){
      this.selectSlide($(".slide").length - 1);
    }

  }

  slideNext(){

    if(this.active && $(".slide")[0].style.marginLeft != (($(".slide").length - 1) * -100 + "vw").toString()){

      this.animateSlide(-100);

    }
    else if(this.active){
      this.selectSlide(1);
    }
  }

  animateSlide(direction){

    this.active = false;
    $(".slide").each(function(){

      var position = parseInt($(this)[0].style.marginLeft);
      $(this).animate({
        "marginLeft" : position + direction + "vw"

      }, 1200,"swing");
    }).promise().done(() => {

        this.active = true;
    });
  }

}
