import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideNavigationComponent} from "./components/side-navigation/side-navigation.component";
import {MainSliderComponent} from "./components/main-slider/main-slider.component";
import {HomeComponent} from "./components/home/home.component";
import {ItemGridsComponent} from "./components/item-grids/item-grids.component";
import {PreviewItemComponent} from "./components/preview-item/preview-item.component";
import {ItemQuantityComponent} from "./components/item-quantity/item-quantity.component";
import {CategoryDisplayComponent} from "./components/category-display/category-display.component";
import {CalenderComponent} from "./components/calender/calender.component";
import {BookedItemsComponent} from "./components/booked-items/booked-items.component";
import {MatNativeDateModule} from "@angular/material/core";
import {MaterialModule} from "../../material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    SideNavigationComponent,
    MainSliderComponent,
    HomeComponent,
    ItemGridsComponent,
    PreviewItemComponent,
    ItemQuantityComponent,
    CategoryDisplayComponent,
    CalenderComponent,
    BookedItemsComponent,

  ],
  imports: [
    CommonModule,
    MatNativeDateModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    SideNavigationComponent,
    MainSliderComponent,
    HomeComponent,
    ItemGridsComponent,
    PreviewItemComponent,
    ItemQuantityComponent,
    CategoryDisplayComponent,
    CalenderComponent,
    BookedItemsComponent
  ]
})
export class BookingSystemModule {}
