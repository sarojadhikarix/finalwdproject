import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ControlService } from './../control/control.service';

import * as $ from 'jquery';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
  providers: [ControlService]
})
export class SelectionComponent implements OnInit, AfterContentChecked {

  constructor(private controlService: ControlService) { }

  types;
  active = true;


  ngOnInit() {
    this.controlService.getControls('Bikes').subscribe(
      data => {
        this.types = data;

      });

      $( window ).resize(function() {

        var height = 0;
        $(".slide").each(function(){
          height = ($(this)[0].offsetHeight > height ? $(this)[0].offsetHeight : height);
        });

        $(".slidecontainer").css("height",  height);
      });

  }

   ngAfterContentChecked(){

    $(function(){
      $(".slide-img img").on("load", function(){

        var height = 0;

        $(".slide").each(function(){
          height = ($(this)[0].offsetHeight > height ? $(this)[0].offsetHeight : height);
        });

        $(".slidecontainer").css("height",  height);

      });



    });

  }


  selectSlide(number){

    if(this.active){
      this.active = false;

      this.selectSlideIcon(number + 1);

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
      this.selectSlide(0);
    }
  }

  animateSlide(direction){

    this.selectSlideIcon((parseInt($(".slide:nth-child(1)")[0].style.marginLeft)+direction)/-100+1);
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

  selectSlideIcon(number){
    $(".slide-selection").removeClass("select-slide-current");
    $(".slide-selection:nth-child("+number+")").addClass("select-slide-current");

  }

}
