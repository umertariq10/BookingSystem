import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {

  }

}
