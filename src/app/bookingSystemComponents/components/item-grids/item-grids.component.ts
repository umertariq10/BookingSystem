import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PreviewItemComponent} from '../preview-item/preview-item.component';
import {Item} from '../../models/item.model';
import {CartService} from '../../service/cart.service';
import {PreviewItem} from '../../models/preview-item.model';
import {CategoriesService} from '../../service/categories.service';
import {ItemSelection} from '../../models/item-selection-enum';
import {Categories} from '../../models/categories.model';
import {BookedItemService} from '../../service/booked-item.service';


@Component({
  selector: 'app-item-grids',
  templateUrl: './item-grids.component.html',
  styleUrls: ['./item-grids.component.scss']
})
export class ItemGridsComponent implements OnInit {
  @Input() items!: Item[];
  itemSelectionType: typeof ItemSelection = ItemSelection;
  categories!: Categories[];
  cartItems!: Item[];

  constructor(
    public dialog: MatDialog,
    public cartService: CartService,
    public categoriesService: CategoriesService,
  ) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((category: Categories[]) => this.categories = category);
    this.cartService.getItem().subscribe((items)=> this.cartItems=items);
  }

  /**will open dialog box to book item */
  openImagePreview(item: Item): void {
    const previewItem: PreviewItem = {item, isCart: false};
    this.dialog.open(PreviewItemComponent, {data: previewItem}).afterClosed().subscribe((selectedData) => {
      //checking if data is sent back to update the item state.
      if (!selectedData) {
        return;
      }
      const selectionType: ItemSelection = selectedData.event;
      const selectedItem: Item = selectedData.data;

      //checking if data is requested to add in cart.
      if (selectionType === this.itemSelectionType.AddToCart) {
        this.addItemToCart(selectedItem);
      }

      //checking if data is requested to book item.
      if (selectionType === this.itemSelectionType.Booked) {
        this.categoriesService.updateCategories(this.categories, selectedItem);
        this.cartService.deleteItemFromCart(selectedItem,this.cartItems);
      }
    });
  }

  /** will add item to cart */
  addItemToCart(image: Item): void {
    this.cartService.setItem(image);
    this.cartService.openSnackBar(image.itemName + ' is added to cart', 'Continue');
  }
}
