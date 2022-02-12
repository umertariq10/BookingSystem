import { Component, Input, OnInit } from '@angular/core';
import {SliderImage} from "../../models/categories.model";



@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  @Input()slides!: SliderImage[];
  constructor() {
  }

  ngOnInit(): void {
  }
}
