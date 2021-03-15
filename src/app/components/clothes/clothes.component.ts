import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
/*import { UUID } from 'angular2-uuid';*/ /*will use in future for the unique ID of an item*/

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {
  @Input() isClothes: any;
  slides = [{image : '/assets/slide-images/clothes1.jpg'}, {image: '/assets/slide-images/clothes2.jpg'}];
  clothes: Item[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initializeClothes();
  }
initializeClothes(): void{
this.clothes = [
  {imageUrl : '/assets/slide-images/clothes1.jpg',
  itemName: 'Jeans',
    id: 'JeansCloths',
    quantity: 1,
    category: 'Clothes',
    price: 5
  },
  {
    imageUrl : '/assets/slide-images/clothes2.jpg',
    itemName: 'Shirt',
    id: 'ShirtClothes',
    quantity: 1,
    category: 'Clothes',
    price: 6
  },
  {
    imageUrl : '/assets/slide-images/clothes1.jpg',
    itemName: 'Trousers',
    id: 'TrousersClothes',
    quantity: 1,
    category: 'Clothes',
    price: 7
  },
  {
    imageUrl : '/assets/slide-images/clothes2.jpg',
    itemName: 'DressShirt',
    id: 'DressShirtClothes',
    quantity: 1,
    category: 'Clothes',
    price: 20
  }
];
  }

}
