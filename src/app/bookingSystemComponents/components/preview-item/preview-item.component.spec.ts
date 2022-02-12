import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PreviewItemComponent} from './preview-item.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemSelection} from "../../models/item-selection-enum";

describe('PreviewItemComponent', () => {
  let component: PreviewItemComponent;
  let fixture: ComponentFixture<PreviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewItemComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {open:()=> {},close:()=> {}} }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewItemComponent);
    component = fixture.componentInstance;
    component.item = {
      imageUrl: '',
      id: '1',
      bookingDate: {start: '20/10/22', end: '24/12/22'},
      quantity: 2,
      itemName: '',
      price: 5,
      isBooked: false,
      category: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('will update isBooked property in item', ()=> {
    component.bookItem();
    expect(component.item.isBooked).toEqual(true);
  })

  it('will return Todays  Date', ()=> {
    const currentDate = new Date().toLocaleString().substring(0, 9);
    const getCurrentBookingDate=component.getCurrentBookingDate();
    expect(getCurrentBookingDate).toEqual({start:currentDate, end:currentDate});
  })


});
