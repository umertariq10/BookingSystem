import {Component, Input, OnInit} from "@angular/core";
import {Categories} from "../../models/categories.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@Input()categories!: Categories[];
  constructor() { }

  ngOnInit(): void {
  }

}
