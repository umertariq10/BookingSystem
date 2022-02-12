import {Component, Input, OnInit} from "@angular/core";
import {Item} from "../../models/item.model";
import {SliderImage} from "../../models/categories.model";

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit {
  @Input() items!: Item[];
  @Input() sliderImages!: SliderImage[];
  constructor() { }

  ngOnInit(): void {
  }

}
