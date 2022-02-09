import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { PreviewItemComponent } from '../preview-item/preview-item.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';
import {PreviewItem} from '../../models/preview-item.model';
import {ItemSelection} from "../../models/item-selection-enum";
import {Categories} from "../../models/categories.model";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.scss' ],
})
export class ShoppingCartComponent implements OnInit {
  items!: Item[];
  categories!: Categories[];
  itemSelectionType: typeof ItemSelection = ItemSelection;

  constructor(
              private dialog: MatDialog,
              private cartService: CartService,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.cartService.getItem().subscribe((item) => this.items = item);
    this.categoriesService.getCategories().subscribe((category: Categories[]) => this.categories = category);
  }

  deleteItemFromCart(item: Item): void{
    this.cartService.deleteItemFromCart(item, this.items);
  }

  openImagePreview(item: Item): void {
    const previewItem: PreviewItem = {item, isCart: true };
    this.dialog.open(PreviewItemComponent, { data: previewItem}).afterClosed().subscribe((selectedData) => {
      if (!selectedData) {
        return;
      }
      const selectionType: ItemSelection = selectedData.event;
      const selectedItem: Item = selectedData.data;
      if (selectionType === this.itemSelectionType.Booked) {
        this.categoriesService.updateCategories(this.categories, selectedItem);
        this.deleteItemFromCart(selectedItem);
      }
    });
  }

  totalItemsInCart(): number{
    return this.cartService.totalItemsInCart(this.items);
  }

/*  totalPriceForSingleItem(item: Item): number{
    return this.cartService.totalPriceForSingleItem(item);
  }
  */
  totalPriceForAllItems(items: Item[]): number{
    return this.cartService.totalPriceForAllItems(items);
  }

  bookedAllItems(): void {
    this.items.map((item)=> {
      const updatedItem: Item = {...item, isBooked:true}
      this.categoriesService.updateCategories(this.categories,updatedItem);
    this.deleteItemFromCart(updatedItem);
    })
  }
}
