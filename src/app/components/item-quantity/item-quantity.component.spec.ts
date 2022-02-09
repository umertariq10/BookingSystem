import { ComponentFixture, TestBed } from '@angular/core/testing';
import {DummyCategories} from "../../dumyData";
import { ItemQuantityComponent } from './item-quantity.component';
import {CartService} from "../../service/cart.service";
import {Item} from "../../models/item.model";
import {MaterialModule} from "../../../material/material.module";

describe('ItemQuantityComponent', () => {
  let component: ItemQuantityComponent;
  let fixture: ComponentFixture<ItemQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQuantityComponent ],
      providers:[{provide: CartService, useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemQuantityComponent);
    component = fixture.componentInstance;
    let item= DummyCategories[0].items[0];
    component.item= item as unknown as Item;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
