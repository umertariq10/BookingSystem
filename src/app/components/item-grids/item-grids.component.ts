import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PreviewItemComponent } from '../preview-item/preview-item.component';
import { ItemService } from '../../service/item.service';
import {Item} from '../../models/item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-grids',
  templateUrl: './item-grids.component.html',
  styleUrls: ['./item-grids.component.scss']
})
export class ItemGridsComponent implements OnInit {
@Input()isClothes: any;
@Input()clothes: any;

  constructor(
    public dialog: MatDialog,
    public itemService: ItemService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

 openImagePreview(image: any): void{
    this.dialog.open(PreviewItemComponent, {data: {imageUrl: image}});
}
 addItemToCart(image: Item): void{
    this.itemService.setItem(image);
    this.openSnackBar(image.itemName + ' is added to cart' , 'Continue');
    /*this.snackBar.openFromComponent(NotificationComponent, {
   data: image.itemName + ' is added to cart'});*/
 }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
});
  }
}
