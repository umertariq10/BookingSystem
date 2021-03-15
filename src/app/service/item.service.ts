import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../models/item.model';



@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private item = new Subject<Item[]>();
  items: Item[] = [];

  constructor() {
  }

/*setting the items of all categories*/
  setItem(item: Item): void {
    this.items = this.isItemExsistInCart(item) ? [...this.items, item ] : this.updateQuantity(item);
    this.item.next(this.items);
    this.updateLocalStorage();
  }
/*return the list of items*/
  getItem(): Observable<Item[]> {
    this.updateItemsFromLocalStorage();
    return this.item.asObservable();
  }
  /*clear Items from list*/
  clearItemList(): void {
    this.items = [];
  }

  /**
   *
   * @param itemList : Item[]
   */
  updateItemList(itemList: Item[]): void {
    this.clearItemList();
    this.items = itemList;
    this.item.next(this.items);
    this.updateLocalStorage();
}

  /**
   *
   * @param item : Item
   *
   * @return items: Items[];
   */
  updateQuantity(item: Item): Item[] {  /*Check if the selected item is new or added  the quantity into old item*/
    return this.isItemExsistInCart(item) ? this.items.map((ite) => {
        return item.id === ite.id ? { ...ite, quantity: ite.quantity + 1 } : ite; }) : [...this.items, item];
  }

  isItemExsistInCart(item: Item): boolean{
    return !!this.items.find((ite) => ite.id === item.id);
  }
/*updating the local storage*/
  updateLocalStorage(): void{
    localStorage.setItem('items', JSON.stringify( this.items));
  }
/*updating the item observer from localStorage */
  updateItemsFromLocalStorage(): void{
    const localItems = JSON.parse(localStorage.getItem('items') as string);
    this.item.next(localItems);
  }
}
