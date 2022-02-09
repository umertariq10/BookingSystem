import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {UniqueCategory} from '../../models/categories.model';



@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {
@Input()categoryNames!: UniqueCategory[];
@Input()activeCategory!: string;
@Output()setActiveCategory = new EventEmitter<UniqueCategory>();
  constructor(){
  }

  ngOnInit(): void {
  }

}
