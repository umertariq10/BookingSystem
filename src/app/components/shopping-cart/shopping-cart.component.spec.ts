import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import {MatDialog} from "@angular/material/dialog";
import {CategoriesService} from "../../service/categories.service";
import {CartService} from "../../service/cart.service";
import {MaterialModule} from "../../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {of} from "rxjs";
import {DummyCategories} from "../../dumyData";
import {Item} from "../../models/item.model";

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  let items: Item[]= [{
    imageUrl: '',
    id: '1',
    bookingDate: {start: '', end: ''},
    quantity: 2,
    itemName: '',
    price: 5,
    isBooked: false,
    category: ''
  },{
    imageUrl: '',
    id: '2',
    bookingDate: {start: '', end: ''},
    quantity: 2,
    itemName: '',
    price: 5,
    isBooked: false,
    category: ''
  }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ ShoppingCartComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
      ],
      providers:[{ provide: MatDialog, useValue: {open: ()=> {}}},
        { provide: CategoriesService, useValue: {getCategories: ()=> of(()=> DummyCategories)}},
        { provide: CartService, useValue: {getItem: ()=> of(items)}, totalItemsInCart:()=> {}}
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    spyOn(component, 'totalItemsInCart')
    spyOn(component, 'totalPriceForAllItems')
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(CartService.prototype, 'totalItemsInCart')
    expect(component).toBeTruthy();
  });
});
