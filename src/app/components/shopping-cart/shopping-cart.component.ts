import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from '../../models/item.model';
import { PreviewItemComponent } from '../preview-item/preview-item.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: [ './shopping-cart.component.scss' ],
})
export class ShoppingCartComponent implements OnInit {
  items!: Item[];

  constructor(private itemService: ItemService,
              private dialog: MatDialog,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.itemService.getItem().subscribe((item) => this.items = item);
  }
  deleteItemFromCart(item: Item): void{
    this.cartService.deleteItemFromCart(item, this.items);
  }

  openImagePreview(image: any): void {
    this.dialog.open(PreviewItemComponent, { data: { imageUrl: image } });
  }

  totalItemsInCart(): number{
    return this.cartService.totalItemsInCart(this.items);
  }
  totalPriceForSingleItem(item: Item): number{
    return this.cartService.totalPriceForSingleItem(item);
  }
  totalPriceForAllItems(items: Item[]): number{
    return this.cartService.totalPriceForAllItems(items);
  }

}
