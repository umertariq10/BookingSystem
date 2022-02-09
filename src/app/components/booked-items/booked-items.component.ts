import {Component, Inject, OnInit, ViewContainerRef} from "@angular/core";
import {BookingDate, Item} from "../../models/item.model";
import {Categories} from "../../models/categories.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoriesService} from "../../service/categories.service";

@Component({
  selector: 'app-booked-items',
  templateUrl: './booked-items.component.html',
  styleUrls: ['./booked-items.component.scss']
})
export class BookedItemsComponent implements OnInit {
  allCategories!: Categories[];
  bookedItems!: Item[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private categoryService:CategoriesService , private dialogRef: MatDialogRef<BookedItemsComponent>) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((category: Categories[])=> {
      this.allCategories= category
      this.setBookedItems(this.allCategories);
    })
  }

  /**will set the item booking false and update object */
  cancelBooking(item: Item): void {
    const updatedItem: Item = {...item, isBooked: false, bookingDate: null as unknown as BookingDate}
    this.categoryService.updateCategories(this.allCategories, updatedItem);
  }

  /** will filter and set booked item */
  setBookedItems(allCategories: Categories[]): void{
     this.bookedItems = [];
    let filteredItem: Item[];
    allCategories.map((category: Categories) => {
      filteredItem = category.items.filter((item) => item.isBooked)
      if (filteredItem.length) {
        this.bookedItems = [...this.bookedItems, ...filteredItem]
      }
    })
  }

  close(): void {
   this.dialogRef.close();
  }
}
