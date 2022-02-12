import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookedItemsComponent} from '../../bookingSystemComponents/components/booked-items/booked-items.component';
import {DummyCategories} from '../../dumyData';
import {CategoriesService} from '../../bookingSystemComponents/service/categories.service';
import {Categories} from '../../bookingSystemComponents/models/categories.model';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {
 categories!: Categories[];

  constructor(public dialog: MatDialog, public categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.setCategories(DummyCategories);
    this.categoryService.getCategories().subscribe((category: Categories[]) => this.categories = category);
  }

  /** will open the booking dialog */
  openBookingDialog(): void{
    this.dialog.open(BookedItemsComponent, {
      minHeight: '300px',
      minWidth: '500px',
    });
  }
}
