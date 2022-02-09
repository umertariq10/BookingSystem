import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookedItemsComponent } from './booked-items.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Categories} from "../../models/categories.model";

describe('BookedItemsComponent', () => {
  let component: BookedItemsComponent;
  let fixture: ComponentFixture<BookedItemsComponent>;
  const categories: Categories[]= [
    {
      id: '1',
      name: 'Vehicles',
      sliderImage: [{image: '/assets/slide-images/clothes1.jpg'}, {image: '/assets/slide-images/clothes2.jpg'}],
      items: [
        {
          imageUrl: '/assets/slide-images/clothes1.jpg',
          itemName: 'Jeans',
          id: 'JeansCloths',
          quantity: 1,
          category: 'Vehicles',
          price: 5,
          isBooked: false,
          bookingDate: {start:' ' , end: ' '}
        },
        {
          imageUrl: '/assets/slide-images/clothes2.jpg',
          itemName: 'Shirt',
          id: 'ShirtClothes',
          quantity: 1,
          category: 'Vehicles',
          price: 6,
          isBooked: true,
          bookingDate: {start:'',end:''},
        }]
    },
    {
      id: '2',
      name: 'Rooms',
      sliderImage: [{image: '/assets/slide-images/clothes1.jpg'}, {image: '/assets/slide-images/clothes2.jpg'}],
      items: [
        {
          imageUrl: '/assets/slide-images/clothes1.jpg',
          itemName: 'Jeans',
          id: 'JeansCloths',
          quantity: 1,
          category: 'Vehicles',
          price: 5,
          isBooked: true,
          bookingDate: { start : '', end : ''},
        }]}

  ]


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedItemsComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {close: ()=>{}}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter and set booked item  ', () => {
    const dummyData = component.allCategories = categories;
    component.setBookedItems(dummyData)
    expect(component.bookedItems.length).toEqual(2);
  });

});
