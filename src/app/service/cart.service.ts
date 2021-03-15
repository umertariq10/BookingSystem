import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemService } from './item.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private itemService: ItemService,
              private snackBar: MatSnackBar) {
  }

  deleteItemFromCart(item: Item, itemList: Item[]): void {
    itemList = itemList.filter((ite: Item) => ite.id !== item.id);
    this.itemService.updateItemList(itemList);
    this.openSnackBar(item.itemName + ' removed from cart', 'Continue');
  }

  totalItemsInCart(items: Item[]): number {
    let totalItems = 0;
    items.forEach((item: Item) => {
      totalItems += item.quantity;
    });
    return totalItems;
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  totalPriceForSingleItem(item: Item): number{
    return item.price * item.quantity;
  }

  totalPriceForAllItems(items: Item[]): number{
    let totalPrice = 0;
    items.forEach((item: Item) => {
      totalPrice += this.totalPriceForSingleItem(item);
    });
    return totalPrice;
  }
}
