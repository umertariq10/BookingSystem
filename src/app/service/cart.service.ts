import {Injectable} from '@angular/core';
import {Item} from '../models/item.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItem = new Subject<Item[]>();
  cartItems: Item[] = [];

  constructor(private snackBar: MatSnackBar) {
  }

  /**will set the items in cart*/
  setItem(item: Item): void {
    this.cartItems = this.cartItems.length === 0 ? [...this.cartItems, item] : this.updateQuantity(item);
    this.cartItem.next(this.cartItems);
    this.updateLocalStorage();
  }

  /**return the list of items in the cart*/
  getItem(): Observable<Item[]> {
    this.updateItemsFromLocalStorage();
    return this.cartItem.asObservable();
  }

  /** will set the cart empty */
  clearItemList(): void {
    this.cartItems = [];
  }

  /** will delete the item from cart  */
  deleteItemFromCart(item: Item, itemList: Item[]): void {
    itemList = itemList.filter((ite: Item) => ite.id !== item.id);
    this.updateItemList(itemList);
  }

  /** will return the total number of items in cart  */
  totalItemsInCart(items: Item[]): number {
    return items.map((item) => item.quantity).reduce((item, num) => item + num);
  }

  /** will return the total price of single Item in cart */
  totalPriceForSingleItem(item: Item): number {
    return item.price * item.quantity;
  }

  /** will return the total price of all Items in cart */
  totalPriceForAllItems(items: Item[]): number {
    let totalPrice = 0;
    items.forEach((item: Item) => {
      totalPrice += this.totalPriceForSingleItem(item);
    });
    return totalPrice;
  }

  /**
   *
   * @param itemList : Item[]
   */
  updateItemList(itemList: Item[]): void {
    this.clearItemList();
    this.cartItems = itemList;
    this.cartItem.next(this.cartItems);
    this.updateLocalStorage();
  }

  /**
   *
   * @param item : Item
   *
   * @return items: Items[];
   */
  updateQuantity(item: Item): Item[] {  /*Check if the selected item is new or added  the quantity into old item*/
    return this.isItemExistInCart(item) ? this.cartItems.map((ite) => {
      return item.id === ite.id ? {...ite, quantity: ite.quantity + 1} : ite;
    }) : [...this.cartItems, item];
  }

  /** will check if item is in cart */
  isItemExistInCart(item: Item): boolean {
    return !!this.cartItems.find((ite) => ite.id === item.id);
  }

  /**updating the local storage*/
  updateLocalStorage(): void {
    localStorage.setItem('items', JSON.stringify(this.cartItems));
  }

  /**updating the item observer from localStorage **/
  updateItemsFromLocalStorage(): void {
    const localItems = JSON.parse(localStorage.getItem('items') as string);
    this.cartItem.next(localItems);
  }

  /** will be called when item added in cart **/
  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
