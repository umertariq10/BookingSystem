import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  @Input()slides: any;
  constructor() {
  }

  ngOnInit(): void {
  }
}
