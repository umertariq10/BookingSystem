import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {BookingDate, Item} from '../../models/item.model';
import {PreviewItem} from '../../models/preview-item.model';
import {ItemSelection} from '../../models/item-selection-enum';


@Component({
  selector: 'app-preview-item',
  templateUrl: './preview-item.component.html',
  styleUrls: ['./preview-item.component.scss']
})
export class PreviewItemComponent implements OnInit {
  item!: Item;
  isCartPreview!: boolean;
  itemSelectionType: typeof ItemSelection = ItemSelection;

  constructor(@Inject(MAT_DIALOG_DATA) public data: PreviewItem, private dialogRef: MatDialogRef<PreviewItemComponent>) {

    this.item = data.item;
    this.isCartPreview = data.isCart;
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  /** will add item to cart */
  addItemToCart(): void {
    this.item = {...this.item, bookingDate: this.getCurrentBookingDate()}
    this.dialogRef.close({event: this.itemSelectionType.AddToCart, data: this.item});
  }

  /** will send item to parent component to book item for user */
  bookItem(): void {
    // if date is not selected then current date will be added to the booking item.
    if (!this.item.bookingDate) {
      this.item = {...this.item, bookingDate: this.getCurrentBookingDate()};
    }

    this.item = {...this.item, isBooked: true};
    this.dialogRef.close({event: this.itemSelectionType.Booked, data: this.item});
  }

  /**will update booking date */
  updateBookingDate(date: any): void {
    this.item = {...this.item, bookingDate: date};
  }

  /** will update the isBooked property in selected Item */
  editBooking(): void {
    this.item = {...this.item, isBooked: !this.item.isBooked};
  }

  /** will return the current date */
  getCurrentBookingDate(): BookingDate {
    return {
      start: new Date()?.toLocaleString().substring(0, 9),
      end: new Date()?.toLocaleString().substring(0, 9),
    };
  }
}
