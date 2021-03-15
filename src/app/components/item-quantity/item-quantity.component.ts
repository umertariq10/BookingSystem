import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-item-quantity',
  templateUrl: './item-quantity.component.html',
  styleUrls: [ './item-quantity.component.scss' ],
})
export class ItemQuantityComponent implements OnInit {
  @Input() item!: Item;
  @Input() itemList: any;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
  }

  decreaseItem(): void {
this.updateList(this.decrement(this.item.quantity));
  }

  increaseItem(): void {
    this.updateList(this.accumulate(this.item.quantity));
  }
  accumulate(quantity: number): number{
    return quantity + 1;
  }
  decrement(quantity: number): number{
    return quantity - 1;
  }
  updateList(operator: number): void{
    this.itemList = this.itemList.map((ite: Item) => {
      return ite.id === this.item.id ? {...ite, quantity: operator} : ite;
    });
    this.itemService.updateItemList(this.itemList);
  }
}
