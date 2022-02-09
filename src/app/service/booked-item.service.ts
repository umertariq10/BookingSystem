import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {Categories} from "../models/categories.model";

@Injectable({
  providedIn: 'root'
})

/** service is not used yet mayBe, will use in future */
export class BookedItemService {
  private bookedItem$ = new BehaviorSubject<Item[]>([]);
  bookedItems: Item[] = [];
  constructor() { }

  bookItem(item: Item): void {
    this.bookedItems = [...this.bookedItems, item ];
    this.bookedItem$.next(this.bookedItems);
    this.updateLocalStorage();
  }

 /* getBookedItem(): Observable<Item[]> {
    this.updateItemsFromLocalStorage();
    return this.bookedItem$.asObservable();
  }*/

  cancelBooking(itemToRemove: Item, bookendItems: Item[]): void{
    const updateBookedItems = bookendItems.filter((item) => item.id !== itemToRemove.id && item.itemName !== itemToRemove.itemName);
    this.bookedItems = updateBookedItems;
    this.bookedItem$.next(this.bookedItems);
    this.updateLocalStorage();

  }

  updateLocalStorage(): void{
    localStorage.setItem('bookedItems', JSON.stringify( this.bookedItems));
  }


  updateItemsFromLocalStorage(): void{
    const localItems = JSON.parse(localStorage.getItem('bookedItems') as string);
    this.bookedItem$.next(localItems);
  }
}
